import { loadMoreFilms, loadMoreSeries, loadMoreResults } from "@/store/reducers/loadMoreSlice";
import { setFilterRatings, setFiterYears, setSortByRelease } from "@/store/reducers/filtersSlice";
import { toggleFilters } from "@/store/reducers/toggleSlice";
import { setPage } from "@/store/reducers/paginationSlice";
import { setSearch } from "@/store/reducers/searchSlice";

export {
    setSearch,
    loadMoreFilms,
    loadMoreSeries,
    loadMoreResults,
    setFilterRatings,
    setFiterYears,
    setSortByRelease,
    setPage,
    toggleFilters
}