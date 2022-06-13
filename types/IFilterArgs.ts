interface IFilters {
    rating: any;
    year: any;
    sortByRelease?: string;
}

export interface IFilterArgs {
    page: number;
    filters: IFilters
}