import {IData} from './IData';
import {IPerson} from "@/types/IPerson";

export interface IPersons extends IData {
    docs: IPerson[];
}