import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { Film } from "../../components/screens/Film/Film";
import { getFilmById } from "../../services/KinopoiskService";
import { initStore } from "../../store/store";

const FilmPage: NextPage = () => {

    return (
        <>
            <Film />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore()
    
    await store.dispatch(getFilmById.initiate(params.query.id))
  
    return { props: { initialReduxState: store.getState()}
}}

export default FilmPage;