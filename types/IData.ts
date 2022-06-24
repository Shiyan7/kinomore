import { IMovie } from "./IMovie";

export interface IData {
    docs: IMovie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
    movie: IMovie
}