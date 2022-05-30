import type { NextPage } from 'next'
import { Home } from '../components/screens/Home/Home';
import { getNewFilms } from '../services/KinopoiskService';
import { wrapper } from '../store/store';
import { IFilms } from '../types/IFilms';

interface IndexProps {
  data: IFilms | undefined
}

const Index: NextPage<IndexProps> = ({data}) => {

  return (
    <Home data={data} />
  );
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  const { data } = await store.dispatch(getNewFilms.initiate(''))

  return {
    props: {
      data
    }
  }
})

export default Index