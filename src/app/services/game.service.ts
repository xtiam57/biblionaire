import { Injectable } from '@angular/core';
import { prices } from '../content/prices';
import { AudioName } from '../types/AudioName';
import { Difficulty } from '../types/Difficulty';
import IQuestion from '../types/IQuestion';
import { random, randomize, shuffle } from '../utils/math';
import { AudioService } from './audio.service';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private questions: IQuestion[] = [];
  private isCorrect = false;
  private optionSelectedIndex = null;
  private currentQuestionIndex = -1;
  private interval;
  private fiftyFiftyIndexes = [];

  isTimerRunning = false;
  isFinalAnswerSelected = null;
  isAnswerRevealed = null;
  timeLeft = 42;
  boundTime = 40;
  hasQuit = false;

  lifelines = {
    fiftyFifty: true,
    askAudience: true,
    bible: true,
    call: true,
  };

  constructor(
    private audioService: AudioService,
    private questionsService: QuestionsService
  ) {}

  reset(): void {
    this.questions = [];
    this.isCorrect = false;
    this.optionSelectedIndex = null;
    this.currentQuestionIndex = -1;
    this.isFinalAnswerSelected = null;
    this.isAnswerRevealed = null;
    this.isTimerRunning = false;
    this.fiftyFiftyIndexes = [];
    this.timeLeft = -1;
    this.boundTime = 40;
    this.lifelines = {
      fiftyFifty: true,
      askAudience: true,
      bible: true,
      call: true,
    };
    this.hasQuit = false;
    clearInterval(this.interval);
  }

  start(): void {
    this.reset();

    this.audioService.stopAll();

    this.pickQuestions(Difficulty.EASY, 3);
    this.pickQuestions(Difficulty.MEDIUM_EASY, 3);
    this.pickQuestions(Difficulty.MEDIUM, 3);
    this.pickQuestions(Difficulty.HARD, 3);
    this.pickQuestions(Difficulty.VERY_HARD, 3);

    this.getNextQuestion();
  }

  useFiftyFifty(): void {
    this.lifelines.fiftyFifty = false;
    this.optionSelectedIndex = null;
    this.audioService.play(AudioName.LETS_PLAY);

    const question = this.getCurrentQuestion();
    this.fiftyFiftyIndexes.push(question.answerIndex);

    while (this.fiftyFiftyIndexes.length < 2) {
      const index = random(0, 3);
      if (index !== question.answerIndex) {
        this.fiftyFiftyIndexes.push(index);
      }
    }
  }

  getCurrentFloorPrice(): string {
    if (this.currentQuestionIndex < 5) {
      return '0';
    }
    if (this.currentQuestionIndex >= 5 && this.currentQuestionIndex < 10) {
      return prices[4];
    }
    if (this.currentQuestionIndex >= 10) {
      return prices[9];
    }
  }

  isFloor(): boolean {
    return this.currentQuestionIndex === 4 || this.currentQuestionIndex === 9;
  }

  isHidden(optionIndex): boolean {
    if (this.lifelines.fiftyFifty || !this.fiftyFiftyIndexes.length) {
      return false;
    }
    return this.fiftyFiftyIndexes.indexOf(optionIndex) < 0;
  }

  useAskAudience(): void {
    this.lifelines.askAudience = false;
    this.startTimer(22, 20);
  }

  useBible(): void {
    this.lifelines.bible = false;
    this.startTimer();
  }

  useCall(): void {
    this.lifelines.call = false;
    this.startTimer();
  }

  quit(): void {
    this.hasQuit = true;
    this.optionSelectedIndex = null;
    this.audioService.play(AudioName.CORRECT_ANSWER);
  }

  startTimer(totalTime = 42, bound = 40): void {
    this.timeLeft = totalTime;
    this.boundTime = bound;

    this.isTimerRunning = true;
    this.pauseBackgroundAudio();

    if (bound === 40) {
      this.audioService.play(AudioName.PHONE_CALL, 0.25);
    } else {
      this.audioService.play(AudioName.QUICK_MIND, 0.25);
    }

    this.interval = setInterval(() => {
      if (this.timeLeft >= 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.playBackgroundAudio();
        this.isTimerRunning = false;
      }
    }, 1000);
  }

  playBackgroundAudio(): void {
    this.pauseBackgroundAudio();

    const questionNumber = this.getCurrentQuestionNumber();

    if (questionNumber < 6) {
      this.audioService.play(AudioName.EASY_LOOP, 0.25, true);
    } else if (questionNumber >= 6 && questionNumber < 11) {
      this.audioService.play(AudioName.MEDIUM_LOOP, 0.25, true);
    } else if (questionNumber >= 11) {
      this.audioService.play(AudioName.HARD_LOOP, 0.25, true);
    }
  }

  pauseBackgroundAudio(): void {
    this.audioService.pause(AudioName.EASY_LOOP);
    this.audioService.pause(AudioName.MEDIUM_LOOP);
    this.audioService.pause(AudioName.HARD_LOOP);
  }

  playSpecialIntro(): void {
    // First question
    if (this.currentQuestionIndex === 0) {
      this.audioService.play(AudioName.COPMMERCIAL_BREAK);
    }
    // Questions 6 and 11
    if (
      this.currentQuestionIndex === 5 ||
      this.currentQuestionIndex === 10 ||
      this.currentQuestionIndex === 14
    ) {
      this.audioService.play(AudioName.LETS_PLAY);
    }
  }

  getNextQuestion(): IQuestion {
    this.currentQuestionIndex++;
    this.isCorrect = false;
    this.optionSelectedIndex = null;
    this.isFinalAnswerSelected = null;
    this.isAnswerRevealed = null;
    this.fiftyFiftyIndexes = [];

    const question = this.questions[this.currentQuestionIndex];

    question.answer = question.options[0];
    question.options = shuffle(question.options);
    question.answerIndex = question.options.indexOf(question.answer);
    question.isUsed = true;
    // TODO: update used field

    this.playBackgroundAudio();
    this.playSpecialIntro();

    return question;
  }

  isEnd(): boolean {
    return (
      this.currentQuestionIndex >= 14 ||
      this.currentQuestionIndex === this.questions.length - 1
    );
  }

  getCurrentQuestion(): IQuestion {
    if (this.currentQuestionIndex >= this.questions.length) {
      return;
    }
    return this.questions[this.currentQuestionIndex];
  }

  getCurrentQuestionNumber(): number {
    if (this.currentQuestionIndex >= 15) {
      return 15;
    }
    return this.currentQuestionIndex + 1;
  }

  getCurrentPrice(): string {
    if (this.currentQuestionIndex >= prices.length) {
      return;
    }
    return prices[this.currentQuestionIndex];
  }

  getEarnedPrice(): string {
    if (!this.currentQuestionIndex) {
      return '0';
    }
    return prices[this.currentQuestionIndex - 1];
  }

  chooseFinalAnswer(): void {
    this.isFinalAnswerSelected = true;
    this.audioService.play(AudioName.FINAL_ANSWER);
    this.pauseBackgroundAudio();
  }

  selectOption(option): void {
    if (option === this.optionSelectedIndex) {
      this.optionSelectedIndex = null;
      return;
    }
    this.optionSelectedIndex = option;
  }

  revealAnswer(): void {
    const question = this.getCurrentQuestion();

    if (this.optionSelectedIndex === null) {
      return;
    }

    this.audioService.stop(AudioName.FINAL_ANSWER);

    this.isAnswerRevealed = true;

    if (question.answer === question.options[this.optionSelectedIndex]) {
      this.audioService.play(AudioName.CORRECT_ANSWER);
      this.isCorrect = true;
      this.playBackgroundAudio();
      return;
    }
    this.audioService.play(AudioName.WRONG_ANSWER);
    this.isCorrect = false;
    this.pauseBackgroundAudio();
  }

  isOptionSelected(optionIndex = null): boolean {
    if (optionIndex !== null) {
      return this.optionSelectedIndex === optionIndex;
    }
    return this.optionSelectedIndex !== null;
  }

  isBlinking(optionIndex): boolean {
    const question = this.getCurrentQuestion();
    return (
      this.isAnswerRevealed && question.answer === question.options[optionIndex]
    );
  }

  isCorrectAnswer(): boolean {
    return this.isAnswerRevealed && this.isCorrect;
  }

  isIncorrectAnswer(): boolean {
    return this.isAnswerRevealed && !this.isCorrect;
  }

  getOptionLetter(index): string {
    return ['A', 'B', 'C', 'D'][index];
  }

  private pickQuestions(difficulty, quantity: number): void {
    let filtered = this.questionsService.getQuestions(difficulty);
    filtered = randomize(filtered, quantity);
    this.questions = this.questions.concat(filtered);
  }
}
