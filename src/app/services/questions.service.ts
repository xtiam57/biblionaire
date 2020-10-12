import { Injectable } from '@angular/core';
import { questions } from '../content/questions';
import { quickQuestions } from '../content/quick-questions';
import { Difficulty } from '../types/Difficulty';
import IQuestion from '../types/IQuestion';
import IQuickQuestion from '../types/IQuickQuestion';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor() {}

  getQuestions(difficulty?: Difficulty): IQuestion[] {
    let filteredQuestions: IQuestion[] = questions.filter(
      (question: IQuestion) => !question.isUsed
    );

    if (difficulty) {
      filteredQuestions = filteredQuestions.filter(
        (question: IQuestion) => question.difficulty === difficulty
      );
    }

    return filteredQuestions;
  }

  getQuickQuestions(): IQuickQuestion[] {
    return quickQuestions.filter(
      (question: IQuickQuestion) => !question.isUsed
    );
  }

  getQuestionsCount(difficulty?: Difficulty): number {
    const filteredQuestions = this.getQuestions(difficulty);
    return filteredQuestions.length;
  }
}
