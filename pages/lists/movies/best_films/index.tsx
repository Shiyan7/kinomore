import { GetServerSideProps, NextPage } from "next";
import { BestFilms } from "../../../../components/screens/Films/components/BestFilms/BestFilms";
import { getBestFilms } from "../../../../services/KinopoiskService";
import { initStore } from "../../../../store/store";

const BestFilmsPage: NextPage = () => {
  return (
    <BestFilms />
  );
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const store = initStore()
  const state = store.getState()
  const {bestFilmsRating} = state.ratingReducer
  const {bestFilmsYear} = state.yearReducer
  const {bestFilmsPage} = state.paginationReducer
  
  await store.dispatch(getBestFilms.initiate({
    page: bestFilmsPage,
    minRating: bestFilmsRating?.minRating,
    maxRating: bestFilmsRating?.maxRating,
    minYear: bestFilmsYear.minYear,
    maxYear: bestFilmsYear.maxYear
  }))

  return { props: { initialReduxState: store.getState()}
}}

export default BestFilmsPage;