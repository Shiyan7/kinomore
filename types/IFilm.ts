import { IPoster } from "./IPoster";
import { IRating } from "./IRating";
import { IVotes } from "./IVotes";

interface IName {
    _id: string;
    name: string;
}

export interface ExternalId {
    _id: string;
    imdb: string;
}

export interface IFilm {
    externalId: ExternalId;
    poster: IPoster;
    rating: IRating;
    votes: IVotes;
    id: number;
    type: string;
    name: string;
    description: string;
    year?: number;
    alternativeName: string;
    enName?: any;
    movieLength?: number;
    names: IName[];
    shortDescription: string;
}