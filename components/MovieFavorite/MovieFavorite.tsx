import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { FiBookmark } from 'react-icons/fi'
import styles from './MovieFavorite.module.scss'

interface MovieFavoriteProps {
    id: number | string | string[] | undefined;
    variant?: 'stroke';
    children?: ReactNode;
    className?: string;
}

export const MovieFavorite: FC<MovieFavoriteProps> = ({id, variant = 'fill', children, className}) => {

    const handleFavorites = () => {
        console.log('id', id);
    } 

    return (
      <button
        onClick={handleFavorites}
        className={classNames(
            'btn-reset',
            variant === 'fill' && styles.favorite,
            variant === 'stroke' && classNames('g-btn g-btn--stroke',  styles.stroke),
            className
        )}>
            <FiBookmark />
            {children}
      </button>
    )
}
