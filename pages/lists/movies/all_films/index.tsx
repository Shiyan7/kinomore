import { GetServerSideProps, NextPage } from "next";
import { AllFilms } from "@/components/screens/Films/components/AllFilms/AllFilms";
import { getAllFilms } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";

const AllFilmsPage: NextPage = () => {
  return (
    <AllFilms />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filters} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getAllFilms.initiate({page: page, filters}))

  return { props: { initialReduxState: store.getState()}
}}

export default AllFilmsPage;