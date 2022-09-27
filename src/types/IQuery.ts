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
	id?: string | string[] | undefined;
}

export interface IQuery extends IBaseQuery {
	filters: IFilters;
}
