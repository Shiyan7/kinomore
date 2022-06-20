import { IMovie } from "./IMovie";
import { IMoviePoster } from "./IMoviePoster";

export interface ISimilarMovie extends IMovie {
    alternativeName: string;
    enName: string;
    id: number;
    name: string;
    poster: IMoviePoster;
    type: string;
}