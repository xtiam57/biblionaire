import { Injectable } from '@angular/core';
import { AudioService } from './audio.service';
import { QuestionsService } from './questions.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuickMindService {
  private currentQuestionIndex = -1;
  private interval;
  private questions = [];
  hasStarted = false;
  isTimerRunning = false;
  isAnswerRevealed = null;
  timeLeft = -1;

  constructor(private audioService: AudioService, private questionsService: QuestionsService) {}

  reset() {
    this.currentQuestionIndex = -1;
    this.isAnswerRevealed = null;
    this.hasStarted = false;
    this.isTimerRunning = false;
    this.timeLeft = -1;
    clearInterval(this.interval);
  }

  start() {
    this.reset();
    this.questions = this.questionsService.getQuickQuestions();

    this.audioService.stopAll();

    this.getNextQuestion();
  }

  play() {
    this.hasStarted = true;
    this.startTimer();
  }

  startTimer() {
    this.timeLeft = 22;
    this.isTimerRunning = true;
    this.audioService.play(this.audioService.AUDIO_NAMES.QUICK_MIND, 0.25);

    this.interval = setInterval(() => {
      if (this.timeLeft >= 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.isTimerRunning = false;
      }
    }, 1000);
  }

  getCurrentQuestion() {
    if (!this.questions.length) {
      return {
        question: 'No hay preguntas en la base de datos para mostrar.',
        options: []
      };
    }
    if (this.currentQuestionIndex >= this.questions.length) {
      return;
    }
    return this.questions[this.currentQuestionIndex];
  }

  getOptionLetter(index) {
    return ['A', 'B', 'C', 'D'][index];
  }

  getNextQuestion() {
    if (!this.questions.length) {
      return;
    }

    this.isAnswerRevealed = null;

    this.currentQuestionIndex = this.random(0, this.questions.length - 1);
    const question = this.questions[this.currentQuestionIndex];

    const ordered = [...question.options];
    question.options = this.shuffle(question.options);
    question.order = [];

    ordered.forEach((item, index) => {
      question.order.push({
        letter: this.getOptionLetter(question.options.indexOf(item)),
        text: item
      });
    });

    question.used = true;
    // TODO: update used field

    return question;
  }

  revealAnswer() {
    this.audioService.play(this.audioService.AUDIO_NAMES.CORRECT_ANSWER);
    this.isAnswerRevealed = true;
  }

  private random(min = 0, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
}
