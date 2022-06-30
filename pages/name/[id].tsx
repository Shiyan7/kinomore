import {GetServerSideProps, NextPage } from 'next';
import {getPersonById} from '@/services/KinopoiskService';
import {initStore} from '@/store/store';
import {Header} from '@/components/Header/Header';
import {Footer} from '@/components/Footer/Footer';
import {Person} from '@/components/screens/Person/Person';

const PersonPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Person />
            </main>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore()
    
    await store.dispatch(getPersonById.initiate(params.query.id))
  
    return { props: { initialReduxState: store.getState()}
}}

export default PersonPage;