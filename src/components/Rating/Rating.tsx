import {IMovieRating} from "@/types/IMovie"
import classNames from "classnames";
import {FC, PropsWithChildren} from "react"
import styles from './Rating.module.scss'

interface RatingProps {
    rating: IMovieRating;
    className?: string;
}

export const Rating: FC<RatingProps> = ({rating, className}) => {

    const isHighRating = Math.floor(Number(rating?.kp || rating?.imdb)) > 4 ? styles.green : styles.red

    return (
        <div className={classNames(isHighRating, className)}>
            {rating?.kp ? rating.kp : rating?.imdb}
        </div>
    )
}
