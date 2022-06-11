import { GetServerSideProps, NextPage } from "next";
import { getWarFilms } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";
import { WarFilms } from "@/components/screens/Films/components/WarFilms/WarFilms";

const WarFilmsPage: NextPage = () => {
  return (
    <WarFilms />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {rating, year, sortByRelease} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getWarFilms.initiate({
    page: page,
    minRating: rating?.minRating,
    maxRating: rating?.maxRating,
    minYear: year.minYear,
    maxYear: year.maxYear,
    releaseYear: sortByRelease
  }))

  return { props: { initialReduxState: store.getState()}
}}

export default WarFilmsPage;