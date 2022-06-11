import { GetServerSideProps, NextPage } from "next";
import { BestFilms } from "@/components/screens/Films/components/BestFilms/BestFilms";
import { getBestFilms } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";

const BestFilmsPage: NextPage = () => {
  return (
    <BestFilms />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {rating, year, sortByRelease} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getBestFilms.initiate({
    page: page,
    minRating: rating?.minRating,
    maxRating: rating?.maxRating,
    minYear: year.minYear,
    maxYear: year.maxYear,
    releaseYear: sortByRelease
  }))

  return { props: { initialReduxState: store.getState()}
}}

export default BestFilmsPage;