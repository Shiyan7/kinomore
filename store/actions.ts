import { loadMoreFilms, loadMoreSeries, loadMoreResults } from "@/store/reducers/loadMoreSlice";
import { setRatingMin, setRatingMax, setYearMin, setYearMax, setSortByRelease } from "@/store/reducers/filtersSlice";
import { toggleFilters } from "@/store/reducers/toggleSlice";
import { setPage } from "@/store/reducers/paginationSlice";
import { setSearch } from "@/store/reducers/searchSlice";

export {
    setSearch,
    loadMoreFilms,
    loadMoreSeries,
    loadMoreResults,
    setRatingMin,
    setRatingMax,
    setYearMin,
    setYearMax,
    setSortByRelease,
    setPage,
    toggleFilters
}