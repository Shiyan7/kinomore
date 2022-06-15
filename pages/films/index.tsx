import { GetServerSideProps, NextPage } from "next";
import { Films } from "@/components/screens/Films/Films";
import { getFilms } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";

const FilmsPage: NextPage = () => {
  return (
    <Films />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filters} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getFilms.initiate({page: page, filters}))

  return { props: { initialReduxState: store.getState()}
}}

export default FilmsPage;