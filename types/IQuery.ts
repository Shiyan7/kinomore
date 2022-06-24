interface IFilters {
    rating: string;
    year: string;
    sortByRelease?: string;
    genre: string;
}

export interface IQuery {
    query?: string;
    page?: number;
    filters: IFilters;
    search?: string | string[] | undefined;
}