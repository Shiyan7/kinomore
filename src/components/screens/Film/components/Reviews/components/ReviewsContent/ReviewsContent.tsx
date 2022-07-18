
import {IReview} from '@/types/IReview'
import {FC} from 'react'
import {ReviewItem} from '../ReviewItem/ReviewItem'
import styles from './ReviewsContent.module.scss'

interface ReviewsContentProps {
    reviews: IReview[] | undefined;
}

export const ReviewsContent: FC<ReviewsContentProps> = ({reviews}) => {

    return (
        <div className={styles.list}>
            {reviews?.map(item => {
                return (
                    <ReviewItem key={item.id} item={item} />
                )
            })}
        </div>
    )
}