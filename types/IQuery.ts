interface IFilters {
    rating: string;
    year: string;
    sortByRelease?: string;
    genre: string;
}

export interface IBaseQUery {
    query?: string;
    limit?: number;
    page?: number;
}

export interface IQuery extends IBaseQUery {
    filters: IFilters;
    search?: string | string[] | undefined;
}