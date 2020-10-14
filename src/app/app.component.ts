import { Component } from '@angular/core';

import {
  faExpand,
  faCompress,
  faHome,
  faVolumeUp,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isFullScreen = false;
  isMuted = false;

  faExpand = faExpand;
  faCompress = faCompress;
  faHome = faHome;
  faVolumeUp = faVolumeUp;
  faVolumeMute = faVolumeMute;

  constructor(private audioService: AudioService) {}

  toggleVolume(): void {
    this.isMuted ? this.audioService.unmute() : this.audioService.mute();
    this.isMuted = !this.isMuted;
  }

  fullScreen(): void {
    let elem: Document | HTMLElement;
    let methodToBeInvoked: { call: (arg0: Document | HTMLElement) => void };

    if (!this.isFullScreen) {
      elem = document.documentElement;
      methodToBeInvoked =
        elem.requestFullscreen ||
        // tslint:disable-next-line: no-string-literal
        elem['webkitRequestFullScreen'] ||
        // tslint:disable-next-line: no-string-literal
        elem['mozRequestFullscreen'] ||
        // tslint:disable-next-line: no-string-literal
        elem['msRequestFullscreen'];
    } else {
      elem = document;
      methodToBeInvoked =
        elem.exitFullscreen ||
        // tslint:disable-next-line: no-string-literal
        elem['webkitExitFullscreen'] ||
        // tslint:disable-next-line: no-string-literal
        elem['mozCancelFullScreen'] ||
        // tslint:disable-next-line: no-string-literal
        elem['msExitFullscreen'];
    }

    if (methodToBeInvoked) {
      methodToBeInvoked.call(elem);
      this.isFullScreen = !this.isFullScreen;
    }
  }
}
