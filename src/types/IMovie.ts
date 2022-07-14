import {IFact} from './IFact';

export interface IMoviePoster {
    previewUrl: string;
    url: string;
}

interface IMovieTrailer {
    name: string;
    site: string;
    url: string;
}

export interface IMovieRating {
    await: number;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
}

interface IMovieBudget {
    currency: string;
    value: number;
}

interface IMoviePremiere {
    cinema: Date;
    country: string;
    russia: Date;
    world: Date;
}

interface IMovieSeasonsInfo {
    number: number;
    episodesCount: number;
}

interface IMovieTechnology {
    has3D: boolean;
    hasImax: boolean;
}

export interface IMoviePerson {
    id: number;
    name: string;
    enName: string;
    description: string;
    enProfession: 'director' | 'actor' | 'design' | 'producer' | 'composer' | 'editor';
    photo: string;
}

interface IMovieDistributors {
    distributor: string;
    distributorRelease: null;
}

interface IMovieProdComp {
    name: string;
    previewUrl: string;
    url: string;
}

interface IMovieSequels {
    alternativeName: string;
    enName: string;
    id: number;
    poster: IMoviePoster;
    type: string;
}

export interface ISimilarMovie {
    alternativeName: string;
    enName: string;
    id: number;
    name: string;
    poster: IMoviePoster;
}

interface IMovieLang {
    name: string;
    nameEn: string;
}

type Fees = {
    value: number;
    currency: string;
}

interface IMovieFees {
    usa: Fees;
    world: Fees;
}

export interface IMovie {
    ageRating: number;
    alternativeName: string;
    backdrop: {url: string};
    budget: IMovieBudget;
    countries: {name: string}[];
    createDate: Date;
    description: string;
    distributors: IMovieDistributors;
    fees: IMovieFees;
    facts: IFact[];
    genres: {name: string}[];
    id: number;
    enName: string;
    images: {framesCount: number}
    lists: [];
    logo: {url: string}
    movieLength: number;
    name: string;
    names: {name: string}[];
    persons: IMoviePerson[];
    poster: IMoviePoster;
    premiere: IMoviePremiere;
    productionCompanies: IMovieProdComp[];
    rating: IMovieRating;
    ratingMpaa: string;
    seasonsInfo?: IMovieSeasonsInfo[];
    sequelsAndPrequels: IMovieSequels[];
    shortDescription: string;
    similarMovies: IMovie[];
    slogan: string;
    spokenLanguages: IMovieLang[];
    status: string;
    technology: IMovieTechnology;
    ticketsOnSale: boolean;
    type: string;
    typeNumber: number;
    updateDates: Date[];
    updatedAt: Date;
    videos: {trailers: IMovieTrailer[]};
    votes: IMovieRating;
    year: number;
}