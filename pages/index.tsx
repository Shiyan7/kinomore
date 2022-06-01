import { NextPage } from 'next';
import { Home } from '../components/screens/Home/Home';
import { getNewFilms, getNewSeries } from '../services/KinopoiskService';
import { initStore  } from '../store/store';

const Index: NextPage = () => {
  return (
    <Home />
  );
};

export async function getServerSideProps() {
  const store = initStore()
  const state = store.getState()
  const {filmsLimit, seriesLimit} = state.loadReducer
  
  await store.dispatch(getNewFilms.initiate(filmsLimit))
  await store.dispatch(getNewSeries.initiate(seriesLimit))

  return { props: { initialReduxState: store.getState()}
}}

export default Index;