import {IData} from './IData';
import {IMovie} from './IMovie';

export interface IMovies extends IData {
    docs: IMovie[];
}