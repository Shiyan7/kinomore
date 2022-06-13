interface IFilters {
    rating: any;
    year: any;
    releaseYear?: string;
}

export interface IFilterArgs {
    page: number;
    filters: IFilters
}