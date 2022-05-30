import type { NextPage } from 'next'
import { Home } from '../components/screens/Home/Home';
import { getNewFilms, getPopularFilm } from '../services/KinopoiskService';
import { wrapper } from '../store/store';

const Index: NextPage = () => {

  return (
    <Home />
  );
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  await store.dispatch(getNewFilms.initiate(''))
  await store.dispatch(getPopularFilm.initiate(''))
})

export default Index