import { IPerson } from "./IPerson";
import { IRating } from "./IRating";
import { ISimilarMovie } from "./ISimilarMovie";

interface IMovieExternalId {
    imdb: string;
}

export interface IMoviePoster {
    url: string;
    previewUrl: string;
}

interface IMovieLogo {
    url: string;
}

export interface IMovieFacts {
    spoiler: boolean;
    type: string;
    value: string;
}

interface IMovieBackdrop {
    url: string;
}

interface IMovieVotes {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

interface IMovieTrailer {
    url: string;
    name: string;
    site: string;
}

interface IMovieVideos {
    trailers: IMovieTrailer[];
    teasers: any[];
}

interface IMovieBudget {
    value: number;
    currency: string;
}

interface IMovieFees {
    usa: any;
    world: any;
}

interface IMoviePremiere {
    country: string;
    world: string;
}

interface IMovieCountry {
    name: string;
}

interface IMovieGenre {
    name: string;
}

interface IMovieName {
    name: string;
}

interface IMovieSeasonsInfo {
    number: number;
    episodesCount: number;
}

interface IMovieTechnology {
    hasImax: boolean;
    has3D: boolean;
}

interface IMovieImagesInfo {
    framesCount: number;
}

export interface IMovie {
    externalId: IMovieExternalId;
    logo: IMovieLogo;
    poster: IMoviePoster;
    backdrop: IMovieBackdrop;
    rating: IRating;
    votes: IMovieVotes;
    videos: IMovieVideos;
    budget: IMovieBudget;
    fees: IMovieFees;
    premiere: IMoviePremiere;
    collections: any[];
    updateDates: any[];
    id: number;
    alternativeName?: any;
    countries: IMovieCountry[];
    createdAt: Date;
    description: string;
    enName?: any;
    facts: IMovieFacts[];
    genres: IMovieGenre[];
    movieLength: number;
    name: string;
    names: IMovieName[];
    persons: IPerson[];
    productionCompanies: any[];
    ratingMpaa?: any;
    seasonsInfo: IMovieSeasonsInfo[];
    sequelsAndPrequels: ISimilarMovie[];
    shortDescription: string;
    similarMovies: any[];
    slogan?: any;
    spokenLanguages: any[];
    technology: IMovieTechnology;
    ticketsOnSale: boolean;
    type: string;
    typeNumber: number;
    updatedAt: Date;
    year: number;
    imagesInfo: IMovieImagesInfo;
    ageRating: number;
    lists: any[];
    createDate: Date;
}