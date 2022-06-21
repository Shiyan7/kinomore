import { GetStaticProps, NextPage } from 'next';
import { Home } from '@/components/screens/Home/Home';
import { getNewFilms, getNewSeries } from '@/services/KinopoiskService';
import { initStore  } from '@/store/store';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore()
  const state = store.getState()
  const {filmsLimit, seriesLimit} = state.loadReducer
  
  await store.dispatch(getNewFilms.initiate(filmsLimit))
  await store.dispatch(getNewSeries.initiate(seriesLimit))

  return { props: { initialReduxState: store.getState()}
}}

export default Index;