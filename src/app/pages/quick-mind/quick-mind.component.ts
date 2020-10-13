import { Component, OnInit } from '@angular/core';
import { QuickMindService } from '../../services/quick-mind.service';

import { faEye, faPlay, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-mind',
  templateUrl: './quick-mind.component.html',
  styleUrls: ['./quick-mind.component.scss'],
})
export class QuickMindComponent implements OnInit {
  faEye = faEye;
  faPlay = faPlay;
  faHome = faHome;

  constructor(public quickMindService: QuickMindService) {}

  ngOnInit(): void {
    this.quickMindService.start();
  }
}
