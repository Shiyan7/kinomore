import {IRating} from '@/types/IRating';
import {FC} from 'react'
import {FiStar} from 'react-icons/fi';
import styles from './MovieRating.module.scss'

interface MovieRatingProps {
    rating: IRating | undefined;
}

export const MovieRating: FC<MovieRatingProps> = ({rating}) => {
  return (
    <span className={styles.rating}>
        <FiStar />
        {rating?.kp ? rating.kp : rating?.imdb}
    </span>
  )
}