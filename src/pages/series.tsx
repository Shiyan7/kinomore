import {GetStaticProps, NextPage} from "next";
import {getSeries} from "@/services/KinomoreService";
import {initStore} from "@/store/store";
import {Series} from "@/components/screens/Series/Series";
import {Layout} from "@/components/Layout/Layout";

const SeriesPage: NextPage = () => {
  return (
    <Layout>
      <Series />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore();
  const state = store.getState();
  const {filters} = state.filtersReducer;
  const {page} = state.paginationReducer;

  await store.dispatch(getSeries.initiate({ page, filters }));

  return {props: { initialReduxState: store.getState() } };
}

export default SeriesPage;