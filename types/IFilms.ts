import { IFilm } from "./IFilm";

export interface IFilms {
    docs: IFilm[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}