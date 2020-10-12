import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { QuestionsService } from '../../services/questions.service';
import { AudioName } from '../../types/AudioName';
import { Difficulty } from '../../types/Difficulty';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isFullScreen = false;
  summary;
  basicTotal = 0;
  quickMindTotal = 0;

  constructor(
    public audioService: AudioService,
    public questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.audioService.stopAll();
    this.audioService.play(AudioName.MAIN, 0.25, true);

    const easyCount = this.questionsService.getQuestionsCount(Difficulty.EASY);
    const mediumEasyCount = this.questionsService.getQuestionsCount(
      Difficulty.MEDIUM_EASY
    );
    const mediumCount = this.questionsService.getQuestionsCount(
      Difficulty.MEDIUM
    );
    const hardCount = this.questionsService.getQuestionsCount(Difficulty.HARD);
    const veryHardCount = this.questionsService.getQuestionsCount(
      Difficulty.VERY_HARD
    );

    this.basicTotal = this.questionsService.getQuestionsCount();
    this.quickMindTotal = this.questionsService.getQuickQuestions().length;

    this.summary = `E: ${easyCount} /
    ME: ${mediumEasyCount} /
    M: ${mediumCount} /
    H: ${hardCount} /
    VH: ${veryHardCount} /
    QM: ${this.quickMindTotal}`;
  }

  changeVolume(quantity = 0.05): void {
    this.audioService.changeVolume(quantity);
  }

  fullScreen(): void {
    // if (!this.isFullScreen) {
    //   const elem = document.documentElement;
    //   const methodToBeInvoked =
    //     elem.requestFullscreen ||
    //     elem.webkitRequestFullScreen ||
    //     elem['mozRequestFullscreen'] ||
    //     elem['msRequestFullscreen'];
    //   if (methodToBeInvoked) {
    //     methodToBeInvoked.call(elem);
    //     this.isFullScreen = true;
    //   }
    // } else {
    //   const methodToBeInvoked =
    //     document.exitFullscreen ||
    //     document.webkitExitFullscreen ||
    //     document['mozCancelFullScreen'] ||
    //     document['msExitFullscreen'];
    //   if (methodToBeInvoked) {
    //     methodToBeInvoked.call(document);
    //     this.isFullScreen = false;
    //   }
    // }
  }
}
