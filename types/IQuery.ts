interface IFilters {
    rating: string;
    year: string;
    sortByRelease?: string;
    genre: string;
}

export interface IBaseQuery {
    type?: string;
    query?: string;
    limit?: number;
    page?: number;
}

export interface IQuery extends IBaseQuery {
    filters: IFilters;
    id?: string | string[] | undefined;
}