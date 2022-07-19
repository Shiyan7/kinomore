import {ButtonBase} from '@/components/UI/ButtonBase/ButtonBase'
import {getReviewColor} from '@/helpers/getReviewColor/getReviewColor'
import {IReview} from '@/types/IReview'
import {FC, useState} from 'react'
import classNames from 'classnames'
import styles from './ReviewItem.module.scss'
import { convertTimestampToDate } from '@/helpers/convertTimestampToDate/convertTimestampToDate'
import { ReviewButtons } from './components/ReviewButtons/ReviewButtons'

interface ReviewItemProps {
    item: IReview
}

export const ReviewItem: FC<ReviewItemProps> = ({item}) => {

    const {
        date,
        type,
        review,
        reviewDislikes,
        reviewLikes,
        title,
    } = item;
    const [isTruncated, setIsTruncated] = useState<boolean>(true)
    const color = getReviewColor(type)
    
    return (
        <div className={classNames(styles.item)} style={{backgroundColor: color}}>
            <div className={styles.content}>
                {title && <h3 className={styles.title}>{title}</h3>}
                <p className={classNames(styles.review, isTruncated && styles.truncated)}>{review}</p>
                {isTruncated && <ButtonBase ripple animationDuration={400} className={styles.showMore} onClick={() => setIsTruncated(false)}>показать всю рецензию</ButtonBase>}
            </div>
            <div className={styles.bottom}>
                <span className={styles.date}>{convertTimestampToDate(date, "D MMMM YYYY")}</span>
                <ReviewButtons likes={reviewLikes} dislikes={reviewDislikes} />
            </div>
        </div>
    )
}