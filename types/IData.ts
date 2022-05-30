import { IFilm } from "./IFilm";

export interface IData {
    docs: IFilm[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}