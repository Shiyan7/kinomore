import { GetServerSideProps, NextPage } from "next";
import { getSeries } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";
import { Series } from "@/components/screens/Series/Series";

const SeriesPage: NextPage = () => {
  return (
    <Series />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filters} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getSeries.initiate({page: page, filters}))

  return { props: { initialReduxState: store.getState()}
}}

export default SeriesPage;