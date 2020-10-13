import { Injectable } from '@angular/core';
import { AudioName } from '../types/AudioName';
import IQuickQuestion from '../types/IQuickQuestion';
import { random, shuffle } from '../utils/math';
import { AudioService } from './audio.service';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root',
})
export class QuickMindService {
  private currentQuestionIndex = -1;
  private interval;
  private questions: IQuickQuestion[] = [];
  hasStarted = false;
  isTimerRunning = false;
  isAnswerRevealed = null;
  timeLeft = -1;
  boundTime = 22;

  constructor(
    private audioService: AudioService,
    private questionsService: QuestionsService
  ) {}

  reset(): void {
    this.currentQuestionIndex = -1;
    this.isAnswerRevealed = null;
    this.hasStarted = false;
    this.isTimerRunning = false;
    this.timeLeft = -1;
    clearInterval(this.interval);
  }

  start(): void {
    this.reset();
    this.questions = this.questionsService.getQuickQuestions();
    this.audioService.stopAll();
    this.getNextQuestion();
  }

  play(): void {
    this.hasStarted = true;
    this.startTimer();
  }

  startTimer(): void {
    this.timeLeft = this.boundTime;
    this.isTimerRunning = true;
    this.audioService.play(AudioName.QUICK_MIND, 0.25);

    this.interval = setInterval(() => {
      if (this.timeLeft >= 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.isTimerRunning = false;
      }
    }, 1000);
  }

  getCurrentQuestion(): IQuickQuestion | undefined {
    if (!this.questions.length) {
      return {
        question: 'No hay preguntas en la base de datos para mostrar.',
        options: [],
      };
    }

    if (this.currentQuestionIndex >= this.questions.length) {
      return;
    }

    return this.questions[this.currentQuestionIndex];
  }

  getOptionLetter(index): string {
    return ['A', 'B', 'C', 'D'][index];
  }

  getNextQuestion(): IQuickQuestion | undefined {
    if (!this.questions.length) {
      return;
    }

    this.isAnswerRevealed = null;

    this.currentQuestionIndex = random(0, this.questions.length - 1);
    const question = this.questions[this.currentQuestionIndex];

    const ordered = [...question.options];
    question.options = shuffle(question.options);
    question.ordered = [];

    ordered.forEach((item, index) => {
      question.ordered.push({
        letter: this.getOptionLetter(question.options.indexOf(item)),
        text: item,
      });
    });

    question.isUsed = true;
    // TODO: update used field

    return question;
  }

  revealAnswer(): void {
    this.audioService.play(AudioName.CORRECT_ANSWER);
    this.isAnswerRevealed = true;
  }
}
