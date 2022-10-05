import { GetStaticProps, NextPage } from 'next';
import { Hero, NewFilms, NewSeries } from '@/screens/Home/index';
import { Layout } from '@/components/Layout/Layout';
import { initStore } from '@/store/store';
import { getNewFilms, getNewSeries } from '@/services/KinomoreService';

const Index: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<NewFilms />
			<NewSeries />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const store = initStore();
	const state = store.getState();
	const { filmsLimit, seriesLimit } = state.loadReducer;

	await store.dispatch(getNewFilms.initiate(filmsLimit));
	await store.dispatch(getNewSeries.initiate(seriesLimit));

	return { props: { initialReduxState: store.getState() } };
};

export default Index;
