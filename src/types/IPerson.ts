import {IFact} from './IFact';
import {IMovie} from './IMovie';

export interface Profession {
    value: string;
}

interface IPersonSpouse {
    _id: string;
    id: number;
    name: string;
    divorced: boolean;
    divorcedReason: string;
    children: number;
    relation: string;
}

export interface IPerson {
    spouses: IPersonSpouse[];
    id: number;
    __v: number;
    age: number;
    birthPlace: any[];
    birthday: Date;
    countAwards: number;
    createdAt: Date;
    death?: any;
    deathPlace: any[];
    enName: string;
    facts: IFact[];
    growth: number;
    movies: IMovie[];
    name: string;
    photo: string;
    profession: Profession[];
    sex: string;
    updatedAt: Date;
}