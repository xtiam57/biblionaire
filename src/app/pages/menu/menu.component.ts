import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { QuestionsService } from '../../services/questions.service';
import { AudioName } from '../../types/AudioName';
import { Difficulty } from '../../types/Difficulty';

import {
  faClock,
  faPlay,
  faExpand,
  faCompress,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isFullScreen = false;
  summary: string;
  basicTotal = 0;
  quickMindTotal = 0;

  faClock = faClock;
  faPlay = faPlay;
  faExpand = faExpand;
  faCompress = faCompress;
  faHeart = faHeart;

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

    this.summary = `Fácil: ${easyCount} ·
    Medio-Fácil: ${mediumEasyCount} ·
    Medio: ${mediumCount} ·
    Dificil: ${hardCount} ·
    Muy Dificil: ${veryHardCount} ·
    Mente Rápida: ${this.quickMindTotal}`;
  }

  changeVolume(quantity = 0.05): void {
    this.audioService.changeVolume(quantity);
  }
}
