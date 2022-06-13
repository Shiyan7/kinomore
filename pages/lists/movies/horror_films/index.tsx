import { GetServerSideProps, NextPage } from "next";
import { getHorrorFilms } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";
import { HorrorFilms } from "@/components/screens/Films/components/HorrorFilms/HorrorFilms";

const HorrorFilmsPage: NextPage = () => {
  return (
    <HorrorFilms />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filters} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getHorrorFilms.initiate({page: page, filters}))

  return { props: { initialReduxState: store.getState()}
}}

export default HorrorFilmsPage;