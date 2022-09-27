import { GetServerSideProps, NextPage } from 'next';
import { getFilmById } from '@/services/KinomoreService';
import { initStore } from '@/store/store';
import { Room } from '@/components/screens/Room/Room';

const RoomPage: NextPage = () => {
	return (
		<main className="main">
			<Room />
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async (params) => {
	const store = initStore();

	await store.dispatch(getFilmById.initiate(params.query.id));

	return { props: { initialReduxState: store.getState() } };
};

export default RoomPage;
