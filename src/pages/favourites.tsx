import { Layout } from '@/components/Layout/Layout';
import { Favourites } from '@/screens/Favourites/Favourites';
import { NextPage } from 'next';

const FavouritesPage: NextPage = () => {
	return (
		<Layout>
			<Favourites />
		</Layout>
	);
};

export default FavouritesPage;
