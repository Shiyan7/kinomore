import {useMemo} from 'react';
import {MovieFavorite as MovieFavoriteButton, MovieFavoriteProps as MovieFavoriteButtonProps} from '@/UI/MovieFavorite/index';
import {useFavourites} from '@/hooks/useFavourite';

export type MovieFavoriteProps = Omit<MovieFavoriteButtonProps, 'isFavourite'>;

export const MovieFavorite = (props: MovieFavoriteProps) => {
    const {favourites} = useFavourites();
    const isFavourite = useMemo(() => favourites.includes(Number(props.id)), [favourites, props.id]);

    return (
        <MovieFavoriteButton {...props} isFavourite={isFavourite} />
    );
}