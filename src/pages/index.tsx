import { GetStaticProps, NextPage } from 'next';
import { Home } from '@/components/screens/Home/Home';
import { Layout } from '@/components/Layout/Layout';
import { initStore } from '@/store/store';
import { getNewFilms, getNewSeries } from '@/services/KinomoreService';

const Index: NextPage = () => {
	return (
		<Layout>
			<Home />
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
