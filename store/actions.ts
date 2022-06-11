import { loadMoreFilms, loadMoreSeries, loadMoreResults } from "@/store/reducers/loadMoreSlice";
import { setRatingMin, setRatingMax, setYearMin, setYearMax, setSortByNew } from "@/store/reducers/filtersSlice";
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
    setSortByNew,
    setPage
}