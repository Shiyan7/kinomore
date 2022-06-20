import { GetStaticProps, NextPage } from "next";
import { Cartoons } from "@/components/screens/Cartoons/Cartoons";
import { getCartoons } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";

const CartoonsPage: NextPage = () => {
  return (
    <Cartoons />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filters} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getCartoons.initiate({page: page, filters}))

  return { props: { initialReduxState: store.getState()}
}}

export default CartoonsPage;