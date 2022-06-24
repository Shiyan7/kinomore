import {FC} from 'react'
import {FiBookmark, FiCheck} from 'react-icons/fi'
import classNames from 'classnames'
import styles from './MovieFavorite.module.scss'
import { useFavourites } from '@/hooks/useFavourite';

interface MovieFavoriteProps {
    id: number;
    isFavourite: boolean;
    variant?: 'text' | 'regular';
    className?: string;
}

export const MovieFavorite: FC<MovieFavoriteProps> = ({id, variant = 'text', className, isFavourite}) => {

  const {toggleFavourite} = useFavourites()

  return (
    <button
      onClick={() => toggleFavourite(id)}
      className={classNames(
        "btn-reset",
        styles.favorite,
        isFavourite && styles.active,
        variant === "text" && styles.text,
        variant === "regular" && styles.regular,
        className
      )}
    >
      {isFavourite ? <FiCheck /> : <FiBookmark />}
      {isFavourite ? 'В избранном' : 'В избранное'}
    </button>
  );
}