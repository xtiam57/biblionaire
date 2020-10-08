import { Component, OnInit } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isFullScreen = false;
  summary;
  basicTotal = 0;
  quickMindTotal = 0;

  constructor(public audioService: AudioService, public questionsService: QuestionsService) {}

  ngOnInit() {
    this.audioService.stopAll();
    this.audioService.play(this.audioService.AUDIO_NAMES.MAIN, 0.25, true);

    const easyCount = this.questionsService.getQuestionsCount(this.questionsService.DIFFICULTY.EASY);
    const mediumEasyCount = this.questionsService.getQuestionsCount(this.questionsService.DIFFICULTY.MEDIUM_EASY);
    const mediumCount = this.questionsService.getQuestionsCount(this.questionsService.DIFFICULTY.MEDIUM);
    const hardCount = this.questionsService.getQuestionsCount(this.questionsService.DIFFICULTY.HARD);
    const veryHardCount = this.questionsService.getQuestionsCount(this.questionsService.DIFFICULTY.VERY_HARD);

    this.basicTotal = this.questionsService.getQuestionsCount();
    this.quickMindTotal = this.questionsService.getQuickQuestions().length;

    this.summary = `E: ${easyCount} /
    ME: ${mediumEasyCount} /
    M: ${mediumCount} /
    H: ${hardCount} /
    VH: ${veryHardCount} /
    QM: ${this.quickMindTotal}`;
  }

  changeVolume(quantity = 0.05) {
    this.audioService.changeVolume(quantity);
  }

  fullScreen() {
    if (!this.isFullScreen) {
      const elem = document.documentElement;
      const methodToBeInvoked = elem.requestFullscreen || elem.webkitRequestFullScreen || elem['mozRequestFullscreen'] || elem['msRequestFullscreen'];

      if (methodToBeInvoked) {
        methodToBeInvoked.call(elem);
        this.isFullScreen = true;
      }
    } else {
      const methodToBeInvoked = document.exitFullscreen || document.webkitExitFullscreen || document['mozCancelFullScreen'] || document['msExitFullscreen'];

      if (methodToBeInvoked) {
        methodToBeInvoked.call(document);
        this.isFullScreen = false;
      }
    }
  }
}
