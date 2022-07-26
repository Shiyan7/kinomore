import {GetServerSideProps, NextPage} from 'next';
import {SearchResults} from '@/components/screens/SearchResults/SearchResults';
import {getFilmByName} from '@/services/KinomoreService';
import {initStore} from '@/store/store';
import {Layout} from '@/components/Layout/Layout';

const searchResults: NextPage = () => {
  return (
    <Layout>
      <SearchResults />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const store = initStore()
  const state = store.getState()
  const id = params.query.id
  const {filters} = state.filtersReducer
  const {page} = state.paginationReducer
  
  await store.dispatch(getFilmByName.initiate({id, page, filters}))

  return { props: { initialReduxState: store.getState()}
}}

export default searchResults;