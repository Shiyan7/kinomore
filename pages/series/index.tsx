import { GetStaticProps, NextPage } from "next";
import { getSeries } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";
import { Series } from "@/components/screens/Series/Series";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const SeriesPage: NextPage = () => {
  return (
    <>
      <Header />
      <Series />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore();
  const state = store.getState();
  const { filters } = state.filtersReducer;
  const { page } = state.paginationReducer;

  await store.dispatch(getSeries.initiate({ page: page, filters }));

  return { props: { initialReduxState: store.getState() } };
}

export default SeriesPage;