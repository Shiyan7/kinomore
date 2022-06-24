import { loadMoreFilms, loadMoreSeries } from "@/store/reducers/loadMoreSlice";
import { setFilterRatings, setFiterYears, setSortByRelease, setFilterGenre, resetFilters } from "@/store/reducers/filtersSlice";
import { toggleFilters } from "@/store/reducers/toggleSlice";
import { setPage } from "@/store/reducers/paginationSlice";
import { setSearch } from "@/store/reducers/searchSlice";

export {
    setSearch,
    loadMoreFilms,
    loadMoreSeries,
    setFilterRatings,
    setFiterYears,
    setSortByRelease,
    setFilterGenre,
    setPage,
    resetFilters,
    toggleFilters,
}