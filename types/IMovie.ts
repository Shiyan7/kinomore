import { IMovieFacts } from "./IMovieFacts";
import { IMoviePoster } from "./IMoviePoster";
import { IPerson } from "./IPerson";
import { IRating } from "./IRating";
import { ISimilarMovie } from "./ISimilarMovie";

export interface ExternalId {
    imdb: string;
}

export interface Logo {
    url: string;
}

export interface Backdrop {
    url: string;
}

export interface Votes {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

export interface Trailer {
    url: string;
    name: string;
    site: string;
}

export interface Videos {
    trailers: Trailer[];
    teasers: any[];
}

export interface Budget {
    value: number;
    currency: string;
}

export interface Fees {
    usa: any;
    world: any;
}

export interface Premiere {
    country: string;
    world: string;
}

export interface Country {
    name: string;
}

export interface Genre {
    name: string;
}

export interface Name {
    name: string;
}

export interface SeasonsInfo {
    number: number;
    episodesCount: number;
}

export interface Technology {
    hasImax: boolean;
    has3D: boolean;
}

export interface ImagesInfo {
    framesCount: number;
}

export interface IMovie {
    externalId: ExternalId;
    logo: Logo;
    poster: IMoviePoster;
    backdrop: Backdrop;
    rating: IRating;
    votes: Votes;
    videos: Videos;
    budget: Budget;
    fees: Fees;
    premiere: Premiere;
    collections: any[];
    updateDates: any[];
    id: number;
    alternativeName?: any;
    countries: Country[];
    createdAt: Date;
    description: string;
    enName?: any;
    facts: IMovieFacts[];
    genres: Genre[];
    movieLength: number;
    name: string;
    names: Name[];
    persons: IPerson[];
    productionCompanies: any[];
    ratingMpaa?: any;
    seasonsInfo: SeasonsInfo[];
    sequelsAndPrequels: ISimilarMovie[];
    shortDescription: string;
    similarMovies: any[];
    slogan?: any;
    spokenLanguages: any[];
    technology: Technology;
    ticketsOnSale: boolean;
    type: string;
    typeNumber: number;
    updatedAt: Date;
    year: number;
    imagesInfo: ImagesInfo;
    ageRating: number;
    lists: any[];
    createDate: Date;
}