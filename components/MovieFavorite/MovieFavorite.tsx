import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { FiBookmark } from 'react-icons/fi'
import styles from './MovieFavorite.module.scss'

interface MovieFavoriteProps {
    id: number | string | string[] | undefined;
    variant?: 'circle' | 'text' | 'regular';
    children?: ReactNode;
    className?: string;
}

export const MovieFavorite: FC<MovieFavoriteProps> = ({id, variant = 'circle', children, className}) => {

    const handleFavorites = () => {
        console.log('id', id);
    } 

    return (
      <button
        onClick={handleFavorites}
        className={classNames(
            'btn-reset',
            styles.favorite,
            variant === 'text' && styles.text,
            variant === 'regular' && styles.regular,
            className
        )}>
            <FiBookmark />
            В избранное
      </button>
    )
}