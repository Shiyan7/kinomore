import { IFilter } from "./IFilter";

interface IFilters {
    rating: IFilter;
    year: IFilter;
    sortByRelease?: string;
}

export interface IFilterArgs {
    page: number;
    filters: IFilters
}