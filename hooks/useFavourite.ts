import { useLocalStorage } from "usehooks-ts";

export function useFavourites() {
  const [favourites, setFavourites] = useLocalStorage<number[]>('favourites', []);

  const toggleFavourite = (id: number) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favourite: number) => favourite !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  return {
    favourites,
    toggleFavourite
  };
}