import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private easyLoop = new Audio();
  private mediumLoop = new Audio();
  private hardLoop = new Audio();
  private correctAnswer = new Audio();
  private wrongAnswer = new Audio();
  private finalAnswer = new Audio();
  private commercialBreak = new Audio();
  private phoneCall = new Audio();
  private letsPlay = new Audio();
  private main = new Audio();
  private quickMind = new Audio();
  globalVolume = 1;

  AUDIO_NAMES = {
    EASY_LOOP: 'EASY_LOOP',
    MEDIUM_LOOP: 'MEDIUM_LOOP',
    HARD_LOOP: 'HARD_LOOP',
    CORRECT_ANSWER: 'CORRECT_ANSWER',
    WRONG_ANSWER: 'WRONG_ANSWER',
    FINAL_ANSWER: 'FINAL_ANSWER',
    COPMMERCIAL_BREAK: 'COPMMERCIAL_BREAK',
    PHONE_CALL: 'PHONE_CALL',
    LETS_PLAY: 'LETS_PLAY',
    MAIN: 'MAIN',
    QUICK_MIND: 'QUICK_MIND'
  };

  constructor() {
    this.easyLoop.src = 'assets/audio/easy-loop.mp3';
    this.mediumLoop.src = 'assets/audio/medium-loop.mp3';
    this.hardLoop.src = 'assets/audio/hard-loop.mp3';
    this.correctAnswer.src = 'assets/audio/correct-answer.mp3';
    this.wrongAnswer.src = 'assets/audio/wrong-answer.mp3';
    this.finalAnswer.src = 'assets/audio/final-answer.mp3';
    this.commercialBreak.src = 'assets/audio/commercial-break.mp3';
    this.phoneCall.src = 'assets/audio/phone-call.mp3';
    this.letsPlay.src = 'assets/audio/lets-play.mp3';
    this.main.src = 'assets/audio/main.mp3';
    this.quickMind.src = 'assets/audio/quick-mind.mp3';
  }

  private getAudio(name = 'EASY_LOOP'): HTMLAudioElement {
    switch (name) {
      case 'MEDIUM_LOOP':
        return this.mediumLoop;
      case 'HARD_LOOP':
        return this.hardLoop;
      case 'CORRECT_ANSWER':
        return this.correctAnswer;
      case 'WRONG_ANSWER':
        return this.wrongAnswer;
      case 'FINAL_ANSWER':
        return this.finalAnswer;
      case 'COPMMERCIAL_BREAK':
        return this.commercialBreak;
      case 'PHONE_CALL':
        return this.phoneCall;
      case 'LETS_PLAY':
        return this.letsPlay;
      case 'MAIN':
        return this.main;
      case 'QUICK_MIND':
        return this.quickMind;
      default:
        return this.easyLoop;
    }
  }

  play(name, volume = 0.6, loop = false) {
    const audio = this.getAudio(name);
    audio.loop = loop;
    audio.volume = volume * this.globalVolume;
    audio.load();
    audio.play();
  }

  stop(name) {
    const audio = this.getAudio(name);
    audio.pause();
    audio.currentTime = 0;
  }

  pause(name) {
    const audio = this.getAudio(name);
    audio.pause();
  }

  stopAll() {
    this.stop(this.AUDIO_NAMES.EASY_LOOP);
    this.stop(this.AUDIO_NAMES.MEDIUM_LOOP);
    this.stop(this.AUDIO_NAMES.HARD_LOOP);
    this.stop(this.AUDIO_NAMES.CORRECT_ANSWER);
    this.stop(this.AUDIO_NAMES.WRONG_ANSWER);
    this.stop(this.AUDIO_NAMES.FINAL_ANSWER);
    this.stop(this.AUDIO_NAMES.COPMMERCIAL_BREAK);
    this.stop(this.AUDIO_NAMES.PHONE_CALL);
    this.stop(this.AUDIO_NAMES.LETS_PLAY);
    this.stop(this.AUDIO_NAMES.MAIN);
    this.stop(this.AUDIO_NAMES.QUICK_MIND);
  }

  changeVolume(quantity = 0.05) {
    this.globalVolume += quantity;
    this.globalVolume = Math.min(this.globalVolume, 2);
    this.globalVolume = Math.max(this.globalVolume, 1);

    this.easyLoop.volume *= this.globalVolume;
    this.mediumLoop.volume *= this.globalVolume;
    this.hardLoop.volume *= this.globalVolume;
    this.correctAnswer.volume *= this.globalVolume;
    this.wrongAnswer.volume *= this.globalVolume;
    this.finalAnswer.volume *= this.globalVolume;
    this.commercialBreak.volume *= this.globalVolume;
    this.phoneCall.volume *= this.globalVolume;
    this.letsPlay.volume *= this.globalVolume;
    this.main.volume *= this.globalVolume;
    this.quickMind.volume *= this.globalVolume;
  }
}
