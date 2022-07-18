import {FC} from 'react'
import {calcPercent} from '@/helpers/calcPercent/calcPercent'
import classNames from 'classnames'
import styles from './ReviewsInfo.module.scss'

interface ReviewsInfoProps {
    total: number | undefined;
    goodReviews: number | undefined;
    badReviews: number | undefined;
    neutralReviews: number | undefined;
}

export const ReviewsInfo: FC<ReviewsInfoProps> = ({
    total,
    goodReviews,
    badReviews,
    neutralReviews
}) => {

    const items = [
        {quantity: total, caption: "Всего"},
        {quantity: goodReviews, percent: calcPercent(goodReviews, total), caption: "Положительные", color: "var(--color-green)"},
        {quantity: badReviews, percent: calcPercent(badReviews, total), caption: "Отрицательные", color: "var(--color-red)"},
        {quantity: neutralReviews, percent: calcPercent(neutralReviews, total), caption: "Нейтральные", color: "#777"},
    ]

    return (
        <ul className={classNames('list-reset', styles.list)}>
            {items.map(item => {

                const {quantity, color, caption, percent} = item

                return (
                    <div className={styles.item} key={caption}>
                        <div className={styles.top}>
                            <h3 className={styles.quantity} style={{color}}>{quantity}</h3>
                            {percent && <span className={styles.percent}>{percent}%</span>}
                        </div>
                        <span className={styles.caption}>{caption}</span>
                    </div>
                )
            })}
        </ul>
    )
}