import { GetServerSideProps, NextPage } from "next";
import { Film } from "@/components/screens/Film/Film";
import { getFilmById } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const FilmPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Film />
            </main>
            <Footer />
        </>
        
    )
}

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore()
    
    await store.dispatch(getFilmById.initiate(params.query.id))
  
    return { props: { initialReduxState: store.getState()}
}}

export default FilmPage;