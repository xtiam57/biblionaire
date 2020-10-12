import { Difficulty } from './Difficulty';

export default interface IQuestion {
  question: string;
  options: string[];
  difficulty: Difficulty;
  reference?: string;
  isUsed?: boolean;
  answerIndex?: number;
  answer?: string;
}
