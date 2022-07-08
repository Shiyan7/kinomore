import { GetStaticProps, NextPage } from "next";
import { Films } from "@/components/screens/Films/Films";
import { getFilms } from "@/services/KinomoreService";
import { initStore } from "@/store/store";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const FilmsPage: NextPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Films />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore();
  const state = store.getState();
  const { filters } = state.filtersReducer;
  const { page } = state.paginationReducer;

  await store.dispatch(getFilms.initiate({ page, filters }));

  return { props: { initialReduxState: store.getState() } };
};

export default FilmsPage;