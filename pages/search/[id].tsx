import { GetServerSideProps, NextPage } from 'next';
import { SearchResults } from '@/components/screens/SearchResults/SearchResults';
import { getFilmByName } from '@/services/KinopoiskService';
import { initStore } from '@/store/store';

const searchResults: NextPage = () => {
    return (
        <SearchResults />
    );
};

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore()
    const state = store.getState()
    const id = params.query.id
    const {filters} = state.filtersReducer
    const {page} = state.paginationReducer
    
    await store.dispatch(getFilmByName.initiate({search: id, page: page, filters}))
  
    return { props: { initialReduxState: store.getState()}
}}

export default searchResults;