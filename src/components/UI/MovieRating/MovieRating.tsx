import { IMovieRating } from '@/types/IMovie';
import { FC } from 'react';
import styles from './MovieRating.module.scss';
import classNames from 'classnames';

interface MovieRatingProps {
	rating: IMovieRating | undefined;
	className?: string;
}

export const MovieRating: FC<MovieRatingProps> = ({ rating, className }) => {
	const isHighRating = Math.floor(Number(rating?.kp || rating?.imdb)) > 4 ? styles.green : styles.red;

	return (
		<>
			{rating && (
				<span className={classNames(styles.rating, isHighRating, className)}>
					{Number(rating?.kp ? rating.kp : rating?.imdb).toFixed(1)}
				</span>
			)}
		</>
	);
};
