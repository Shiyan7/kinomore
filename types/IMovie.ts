import { IPerson } from "./IPerson";
import { IRating } from "./IRating";

export interface ExternalId {
    _id: string;
    imdb: string;
}

export interface Logo {
    _id: string;
    url: string;
}

export interface Poster {
    _id: string;
    url: string;
    previewUrl: string;
}

export interface Backdrop {
    _id: string;
    url: string;
}

export interface Votes {
    _id: string;
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

export interface Trailer {
    _id: string;
    url: string;
    name: string;
    site: string;
}

export interface Facts {
    spoiler: boolean;
    type: string;
    value: string;
}

export interface Videos {
    _id: string;
    trailers: Trailer[];
    teasers: any[];
}

export interface Budget {
    _id: string;
    value: number;
    currency: string;
}

export interface Fees {
    _id: string;
    usa: any;
    world: any;
}

export interface Premiere {
    _id: string;
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
    _id: string;
    hasImax: boolean;
    has3D: boolean;
}

export interface ImagesInfo {
    _id: string;
    framesCount: number;
}

export interface IMovie {
    externalId: ExternalId;
    logo: Logo;
    poster: Poster;
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
    facts: Facts[];
    genres: Genre[];
    movieLength: number;
    name: string;
    names: Name[];
    persons: IPerson[];
    productionCompanies: any[];
    ratingMpaa?: any;
    seasonsInfo: SeasonsInfo[];
    sequelsAndPrequels: any[];
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