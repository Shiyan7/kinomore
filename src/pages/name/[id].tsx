import { GetServerSideProps, NextPage } from 'next';
import { getPersonById } from '@/services/KinomoreService';
import { initStore } from '@/store/store';
import { Person } from '@/components/screens/Person/Person';
import { Layout } from '@/components/Layout/Layout';

const PersonPage: NextPage = () => {
	return (
		<Layout>
			<Person />
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (params) => {
	const store = initStore();

	await store.dispatch(getPersonById.initiate(params.query.id));

	return { props: { initialReduxState: store.getState() } };
};

export default PersonPage;
