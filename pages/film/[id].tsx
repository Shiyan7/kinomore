import { NextPage } from "next";
import Script from "next/script";
import { Film } from "../../components/screens/Film/Film";
import { getFilmById } from "../../services/KinopoiskService";
import { initStore } from "../../store/store";

const FilmPage: NextPage = () => {
    return (
        <>
            <Film />
            <Script src="https://kinobd.ru/js/player_.js" />
        </>
    )
}

export async function getServerSideProps({params}:any) {
    const store = initStore()
    
    await store.dispatch(getFilmById.initiate(params?.id))
  
    return { props: { initialReduxState: store.getState()}
}}

export default FilmPage;