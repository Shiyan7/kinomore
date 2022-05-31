import type { NextPage } from 'next'
import { Home } from '../components/screens/Home/Home';
import { getNewFilms, getPopularFilm } from '../services/KinopoiskService';
import { initStore  } from '../store/store';

export default function Index () {

  return (
    <Home />
  );
}

export async function getServerSideProps() {
  const store = initStore()
  
  await store.dispatch(getNewFilms.initiate(''))
  await store.dispatch(getPopularFilm.initiate(''))

  return { props: { initialReduxState: store.getState()}
}}