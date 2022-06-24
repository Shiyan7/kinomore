import { IMovie } from "./IMovie";

export interface ISimilarMovie extends IMovie {
    alternativeName: string;
    enName: string;
    id: number;
    name: string;
    type: string;
}