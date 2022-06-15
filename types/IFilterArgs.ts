interface IFilters {
    rating: string;
    year: string;
    sortByRelease?: string;
    genre: string;
}

export interface IFilterArgs {
    page: number;
    filters: IFilters;
    search?: string | string[] | undefined;
}