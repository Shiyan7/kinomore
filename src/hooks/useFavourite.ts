import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const useFavourites = () => {
	const [favourites, setFavourites] = useLocalStorage<number[]>('favourites', []);

	const toggleFavourite = useCallback(
		(id: number) => {
			if (favourites.includes(id)) {
				setFavourites(favourites.filter((favourite: number) => favourite !== id));
			} else {
				setFavourites([...favourites, id]);
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[favourites]
	);

	return {
		favourites,
		toggleFavourite,
	};
};
