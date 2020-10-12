import IOrderedItem from './IOrderedItem';

export default interface IQuickQuestion {
  question: string;
  options: string[];
  ordered?: IOrderedItem[];
  isUsed?: boolean;
}
