import {GetServerSideProps, NextPage} from "next";
import {Film} from "@/components/screens/Film/Film";
import {getFilmById} from "@/services/KinomoreService";
import {initStore} from "@/store/store";
import {Layout} from '@/components/Layout/Layout';

const FilmPage: NextPage = () => {
  return (
    <Layout>
      <Film />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (params) => {
  const store = initStore()
  
  await store.dispatch(getFilmById.initiate(params.query.id))

  return {props: { initialReduxState: store.getState()}
}}

export default FilmPage;