import {FC} from 'react';
import {FiBookmark, FiCheck} from 'react-icons/fi';
import {useFavourites} from '@/hooks/useFavourite';
import classNames from 'classnames';
import styles from './MovieFavorite.module.scss';
import { ButtonBase } from '../ButtonBase/ButtonBase';

export interface MovieFavoriteProps {
    id: string | number | string[] | undefined;
    isFavourite: boolean;
    variant?: 'text' | 'regular';
    className?: string;
    disabled?: boolean;
}

export const MovieFavorite: FC<MovieFavoriteProps> = ({id, variant = 'text', className, isFavourite, disabled}) => {

  const {toggleFavourite} = useFavourites()

  return (
    <ButtonBase
      ripple
      onClick={() => toggleFavourite(Number(id))}
      className={classNames(
        styles.favorite,
        isFavourite && styles.active,
        variant === "text" && styles.text,
        variant === "regular" && styles.regular,
        className
      )}
      startIcon={isFavourite ? <FiCheck /> : <FiBookmark />}
      disabled={disabled}
    >
      Буду смотреть
    </ButtonBase>
  );
}