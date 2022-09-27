import { GetStaticProps, NextPage } from 'next';
import { Films } from '@/components/screens/Films/Films';
import { getFilms } from '@/services/KinomoreService';
import { initStore } from '@/store/store';
import { Layout } from '@/components/Layout/Layout';

const FilmsPage: NextPage = () => {
	return (
		<Layout>
			<Films />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const store = initStore();
	const state = store.getState();
	const { filters } = state.filtersReducer;
	const { page } = state.paginationReducer;

	await store.dispatch(getFilms.initiate({ page, filters }));

	return { props: { initialReduxState: store.getState() } };
};

export default FilmsPage;
