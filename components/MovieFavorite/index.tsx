import dynamic from 'next/dynamic';
import type { MovieFavoriteProps } from './MovieFavorite';
    
export const MovieFavorite = dynamic<MovieFavoriteProps>(() => import('./MovieFavorite').then((mod) => mod.MovieFavorite), {
    ssr: false
});