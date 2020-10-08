import { Injectable } from '@angular/core';
import { AudioService } from './audio.service';
import { QuestionsService } from './questions.service';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private questions = [];
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

  private prices = [
    '50 pts',
    '100 pts',
    '150 pts',
    '250 pts',
    '500 pts',
    '650 pts',
    '800 pts',
    '950 pts',
    '1.000 pts',
    '1.200 pts',
    '1.400 pts',
    '1.600 pts',
    '1.850 pts',
    '2.000 pts',
    '2.500 pts'
  ];

  lifelines = {
    fiftyFifty: true,
    askAudience: true,
    bible: true,
    call: true
  };

  constructor(private audioService: AudioService, private questionsService: QuestionsService) {}

  reset() {
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
      call: true
    };
    this.hasQuit = false;
    clearInterval(this.interval);
  }

  start() {
    this.reset();

    this.audioService.stopAll();

    this.pickQuestions(this.questionsService.DIFFICULTY.EASY, 3);
    this.pickQuestions(this.questionsService.DIFFICULTY.MEDIUM_EASY, 3);
    this.pickQuestions(this.questionsService.DIFFICULTY.MEDIUM, 3);
    this.pickQuestions(this.questionsService.DIFFICULTY.HARD, 3);
    this.pickQuestions(this.questionsService.DIFFICULTY.VERY_HARD, 3);

    this.getNextQuestion();
  }

  useFiftyFifty() {
    this.lifelines.fiftyFifty = false;
    this.optionSelectedIndex = null;
    this.audioService.play(this.audioService.AUDIO_NAMES.LETS_PLAY);

    const question = this.getCurrentQuestion();
    this.fiftyFiftyIndexes.push(question.answerIndex);

    while (this.fiftyFiftyIndexes.length < 2) {
      const index = this.random(0, 3);
      if (index !== question.answerIndex) {
        this.fiftyFiftyIndexes.push(index);
      }
    }
  }

  getCurrentFloorPrice() {
    if (this.currentQuestionIndex < 5) {
      return '0 pts';
    }
    if (this.currentQuestionIndex >= 5 && this.currentQuestionIndex < 10) {
      return this.prices[4];
    }
    if (this.currentQuestionIndex >= 10) {
      return this.prices[9];
    }
  }

  isFloor() {
    return this.currentQuestionIndex === 4 || this.currentQuestionIndex === 9;
  }

  isHidden(optionIndex) {
    if (this.lifelines.fiftyFifty || !this.fiftyFiftyIndexes.length) {
      return false;
    }
    return this.fiftyFiftyIndexes.indexOf(optionIndex) < 0;
  }

  useAskAudience() {
    this.lifelines.askAudience = false;
    this.startTimer(22, 20);
  }

  useBible() {
    this.lifelines.bible = false;
    this.startTimer();
  }

  useCall() {
    this.lifelines.call = false;
    this.startTimer();
  }

  quit() {
    this.hasQuit = true;
    this.optionSelectedIndex = null;
    this.audioService.play(this.audioService.AUDIO_NAMES.CORRECT_ANSWER);
  }

  startTimer(totalTime = 42, bound = 40) {
    this.timeLeft = totalTime;
    this.boundTime = bound;

    this.isTimerRunning = true;
    this.pauseBackgroundAudio();

    if (bound === 40) {
      this.audioService.play(this.audioService.AUDIO_NAMES.PHONE_CALL, 0.25);
    } else {
      this.audioService.play(this.audioService.AUDIO_NAMES.QUICK_MIND, 0.25);
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

  playBackgroundAudio() {
    this.pauseBackgroundAudio();

    const number = this.getCurrentQuestionNumber();

    if (number < 6) {
      this.audioService.play(this.audioService.AUDIO_NAMES.EASY_LOOP, 0.25, true);
    } else if (number >= 6 && number < 11) {
      this.audioService.play(this.audioService.AUDIO_NAMES.MEDIUM_LOOP, 0.25, true);
    } else if (number >= 11) {
      this.audioService.play(this.audioService.AUDIO_NAMES.HARD_LOOP, 0.25, true);
    }
  }

  pauseBackgroundAudio() {
    this.audioService.pause(this.audioService.AUDIO_NAMES.EASY_LOOP);
    this.audioService.pause(this.audioService.AUDIO_NAMES.MEDIUM_LOOP);
    this.audioService.pause(this.audioService.AUDIO_NAMES.HARD_LOOP);
  }

  playSpecialIntro() {
    // First question
    if (this.currentQuestionIndex === 0) {
      this.audioService.play(this.audioService.AUDIO_NAMES.COPMMERCIAL_BREAK);
    }
    // Questions 6 and 11
    if (this.currentQuestionIndex === 5 || this.currentQuestionIndex === 10 || this.currentQuestionIndex === 14) {
      this.audioService.play(this.audioService.AUDIO_NAMES.LETS_PLAY);
    }
  }

  getNextQuestion() {
    this.currentQuestionIndex++;
    this.isCorrect = false;
    this.optionSelectedIndex = null;
    this.isFinalAnswerSelected = null;
    this.isAnswerRevealed = null;
    this.fiftyFiftyIndexes = [];

    const question = this.questions[this.currentQuestionIndex];

    question.answer = question.options[0];
    question.options = this.shuffle(question.options);
    question.answerIndex = question.options.indexOf(question.answer);
    question.used = true;
    // TODO: update used field

    this.playBackgroundAudio();
    this.playSpecialIntro();

    return question;
  }

  isEnd() {
    return this.currentQuestionIndex >= 14 || this.currentQuestionIndex === this.questions.length - 1;
  }

  getCurrentQuestion() {
    if (this.currentQuestionIndex >= this.questions.length) {
      return;
    }
    return this.questions[this.currentQuestionIndex];
  }

  getCurrentQuestionNumber() {
    if (this.currentQuestionIndex >= 15) {
      return 15;
    }
    return this.currentQuestionIndex + 1;
  }

  getCurrentPrice() {
    if (this.currentQuestionIndex >= this.prices.length) {
      return;
    }
    return this.prices[this.currentQuestionIndex];
  }

  getEarnedPrice() {
    if (!this.currentQuestionIndex) {
      return '0 pts';
    }
    return this.prices[this.currentQuestionIndex - 1];
  }

  chooseFinalAnswer() {
    this.isFinalAnswerSelected = true;
    this.audioService.play(this.audioService.AUDIO_NAMES.FINAL_ANSWER);
    this.pauseBackgroundAudio();
  }

  selectOption(option) {
    if (option === this.optionSelectedIndex) {
      this.optionSelectedIndex = null;
      return;
    }
    this.optionSelectedIndex = option;
  }

  revealAnswer() {
    const question = this.getCurrentQuestion();

    if (this.optionSelectedIndex === null) {
      return;
    }

    this.audioService.stop(this.audioService.AUDIO_NAMES.FINAL_ANSWER);

    this.isAnswerRevealed = true;

    if (question.answer === question.options[this.optionSelectedIndex]) {
      this.audioService.play(this.audioService.AUDIO_NAMES.CORRECT_ANSWER);
      this.isCorrect = true;
      this.playBackgroundAudio();
      return;
    }
    this.audioService.play(this.audioService.AUDIO_NAMES.WRONG_ANSWER);
    this.isCorrect = false;
    this.pauseBackgroundAudio();
  }

  isOptionSelected(optionIndex = null) {
    if (optionIndex !== null) {
      return this.optionSelectedIndex === optionIndex;
    }
    return this.optionSelectedIndex !== null;
  }

  isBlinking(optionIndex) {
    const question = this.getCurrentQuestion();
    return this.isAnswerRevealed && question.answer === question.options[optionIndex];
  }

  isCorrectAnswer() {
    return this.isAnswerRevealed && this.isCorrect;
  }

  isIncorrectAnswer() {
    return this.isAnswerRevealed && !this.isCorrect;
  }

  getOptionLetter(index) {
    return ['A', 'B', 'C', 'D'][index];
  }

  private shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  private random(min = 0, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomize(array, quantity = 5) {
    array = this.shuffle(array);
    array = array.slice(0, quantity);
    return array;
  }

  private pickQuestions(difficulty, quantity) {
    let filtered = this.questionsService.getQuestions(difficulty);
    filtered = this.randomize(filtered, quantity);
    this.questions = this.questions.concat(filtered);
  }
}
