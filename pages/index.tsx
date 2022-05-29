import type { NextPage } from 'next'
import { Home } from '../components/screens/Home/Home';
import { getFilms } from '../services/KinopoiskService';
import { wrapper } from '../store/store';
import { IFilms } from '../types/IData';

interface IndexProps {
  data: IFilms | undefined
}

const Index: NextPage<IndexProps> = ({data}) => {

  return (
    <Home data={data} />
  );
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  const state = await store.getState()

  const { data } = await store.dispatch(getFilms.initiate(''))

  return {
    props: {
      data
    }
  }
})

export default Index