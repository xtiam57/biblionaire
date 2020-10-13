import { Injectable } from '@angular/core';
import { createLogicalAnd } from 'typescript';
import { AudioName } from '../types/AudioName';

@Injectable({
  providedIn: 'root',
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

  mute(): void {
    this.applyMuted(true);
  }

  unmute(): void {
    this.applyMuted(false);
  }

  private getAudio(name: AudioName = AudioName.EASY_LOOP): HTMLAudioElement {
    switch (name) {
      case AudioName.MEDIUM_LOOP:
        return this.mediumLoop;
      case AudioName.HARD_LOOP:
        return this.hardLoop;
      case AudioName.CORRECT_ANSWER:
        return this.correctAnswer;
      case AudioName.WRONG_ANSWER:
        return this.wrongAnswer;
      case AudioName.FINAL_ANSWER:
        return this.finalAnswer;
      case AudioName.COPMMERCIAL_BREAK:
        return this.commercialBreak;
      case AudioName.PHONE_CALL:
        return this.phoneCall;
      case AudioName.LETS_PLAY:
        return this.letsPlay;
      case AudioName.MAIN:
        return this.main;
      case AudioName.QUICK_MIND:
        return this.quickMind;
      default:
        return this.easyLoop;
    }
  }

  play(name?: AudioName, volume = 0.6, loop = false): void {
    const audio = this.getAudio(name);
    audio.loop = loop;
    audio.volume = volume * this.globalVolume;
    audio.load();
    audio.play();
  }

  stop(name?: AudioName): void {
    const audio = this.getAudio(name);
    audio.pause();
    audio.currentTime = 0;
  }

  pause(name?: AudioName): void {
    const audio = this.getAudio(name);
    audio.pause();
  }

  stopAll(): void {
    this.stop(AudioName.EASY_LOOP);
    this.stop(AudioName.MEDIUM_LOOP);
    this.stop(AudioName.HARD_LOOP);
    this.stop(AudioName.CORRECT_ANSWER);
    this.stop(AudioName.WRONG_ANSWER);
    this.stop(AudioName.FINAL_ANSWER);
    this.stop(AudioName.COPMMERCIAL_BREAK);
    this.stop(AudioName.PHONE_CALL);
    this.stop(AudioName.LETS_PLAY);
    this.stop(AudioName.MAIN);
    this.stop(AudioName.QUICK_MIND);
  }

  changeVolume(quantity = 0.05): void {
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

  private applyMuted(value: boolean): void {
    this.easyLoop.muted = value;
    this.easyLoop.muted = value;
    this.mediumLoop.muted = value;
    this.hardLoop.muted = value;
    this.correctAnswer.muted = value;
    this.wrongAnswer.muted = value;
    this.finalAnswer.muted = value;
    this.commercialBreak.muted = value;
    this.phoneCall.muted = value;
    this.letsPlay.muted = value;
    this.main.muted = value;
    this.quickMind.muted = value;
  }
}
