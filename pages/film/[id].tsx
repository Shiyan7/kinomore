import { NextPage } from "next";
import { Film } from "../../components/screens/Film/Film";
import { getFilmById } from "../../services/KinopoiskService";
import { initStore } from "../../store/store";

const FilmPage: NextPage = () => {
    return (
        <Film />
    )
}

export async function getServerSideProps({params}:any) {
    const store = initStore()
    
    await store.dispatch(getFilmById.initiate(params?.id))
  
    return { props: { initialReduxState: store.getState()}
}}

export default FilmPage;