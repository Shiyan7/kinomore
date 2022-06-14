interface IFilters {
    rating: string;
    year: string;
    sortByRelease?: string;
}

export interface IFilterArgs {
    page: number;
    filters: IFilters;
    search?: string | string[] | undefined;
}