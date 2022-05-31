import { NextPage } from 'next';
import { Home } from '../components/screens/Home/Home';
import { getNewFilms } from '../services/KinopoiskService';
import { initStore  } from '../store/store';

const Index: NextPage = () => {
  return (
    <Home />
  );
};

export async function getServerSideProps() {
  const store = initStore()
  
  await store.dispatch(getNewFilms.initiate(''))

  return { props: { initialReduxState: store.getState()}
}}

export default Index;