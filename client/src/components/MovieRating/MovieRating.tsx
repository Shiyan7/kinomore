import {FC} from 'react';
import styles from './MovieRating.module.scss';
import classNames from 'classnames';

interface MovieRatingProps {
    rating: any;
    className?: string;
}

export const MovieRating: FC<MovieRatingProps> = ({rating, className}) => {
    const isHighRating = Math.floor(Number(rating?.kp || rating?.imdb || rating)) > 4 ? styles.green : styles.red

    return (
        <>
            {rating &&
                <span className={classNames(styles.rating, isHighRating, className)}>
                    {rating?.kp ? rating.kp : rating?.imdb ? rating?.imdb : rating}
                </span>
            }
        </>
    )
}