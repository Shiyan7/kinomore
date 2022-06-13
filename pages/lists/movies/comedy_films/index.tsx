import { GetServerSideProps, NextPage } from "next";
import { getComedyFilms } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";
import { ComedyFilms } from "@/components/screens/Films/components/ComedyFilms/ComedyFilms";

const ComedyFilmsPage: NextPage = () => {
  return (
    <ComedyFilms />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filters} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getComedyFilms.initiate({page: page, filters}))

  return { props: { initialReduxState: store.getState()}
}}

export default ComedyFilmsPage;