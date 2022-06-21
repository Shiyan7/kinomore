import { GetServerSideProps, NextPage } from 'next';
import { getPerson } from '@/services/KinopoiskService';
import { initStore } from '@/store/store';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const PersonPage: NextPage = () => {
    return (
        <>
            <Header />
            <div>Актёр</div>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore()
    const state = store.getState()
    const id = params.query.id
    
    await store.dispatch(getPerson.initiate({name: id}))
  
    return { props: { initialReduxState: store.getState()}
}}

export default PersonPage;