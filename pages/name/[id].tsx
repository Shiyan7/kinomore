import { GetServerSideProps, NextPage } from 'next';
import { getPerson } from '@/services/KinopoiskService';
import { initStore } from '@/store/store';

const PersonPage: NextPage = () => {
    return (
        <div>Актёр</div>
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