import { loadMoreFilms, loadMoreSeries, loadMoreResults } from "@/store/reducers/loadMoreSlice";
import { setBestFilmsRatingMin, setBestFilmsRatingMax } from "@/store/reducers/ratingSlice";
import { setBestFilmsYearMin, setBestFilmsYearMax } from "@/store/reducers/yearSlice";
import { setBestFilmsPage } from "@/store/reducers/paginationSlice";
import { setSearch } from "@/store/reducers/searchSlice";

export {
    setSearch,
    loadMoreFilms,
    loadMoreSeries,
    loadMoreResults,
    setBestFilmsRatingMin,
    setBestFilmsRatingMax,
    setBestFilmsYearMin,
    setBestFilmsYearMax,
    setBestFilmsPage
}