import {IFact} from './IFact';
import {IMovie} from './IMovie';

interface IPersonSpouse {
    children: number;
    divorced: boolean;
    divorcedReason: string;
    id: number;
    name: string;
    relation: string;
}

export interface IPerson {
    age: number;
    birthPlace: {value: string}[];
    birthday: Date;
    countAwards: number;
    death: Date;
    deathPlace: {value: string}[];
    enName: string;
    facts: IFact[];
    growth: number;
    id: number;
    movies: IMovie[];
    name: string;
    photo: string;
    profession: {value: string}[];
    sex: string;
    spouses: IPersonSpouse[];
    updatedAt: Date;
}