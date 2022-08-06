import {IData} from './IData';
import {IReview} from './IReview';

export interface IReviews extends IData {
    docs: IReview[];
}