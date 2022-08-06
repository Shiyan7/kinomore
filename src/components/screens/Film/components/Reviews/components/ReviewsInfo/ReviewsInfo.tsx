import {calcPercent} from '@/helpers/calcPercent/calcPercent';
import {useGetReviewsByIdQuery} from '@/services/KinomoreService'
import {useRouter} from 'next/router';
import classNames from 'classnames';
import styles from './ReviewsInfo.module.scss';
import { FC } from 'react';

interface ReviewsInfoProps {
    limit: number | undefined;
}

export const ReviewsInfo: FC<ReviewsInfoProps> = ({limit}) => {
    
    const {query: {id}} = useRouter()
    const {data, isLoading} = useGetReviewsByIdQuery({id, limit})
    const {docs, total} = {...data}

    const goodReviews = docs?.filter(rev => rev?.type === 'Позитивный' || !rev.type).length;
    const badReviews = docs?.filter(rev => rev?.type === 'Негативный').length;
    const neutralReviews = docs?.filter(rev => rev?.type === 'Нейтральный').length;

    const items = [
        {quantity: total, caption: "Всего"},
        {quantity: goodReviews, percent: calcPercent(goodReviews, total), caption: "Положительные", color: "var(--color-green)"},
        {quantity: badReviews, percent: calcPercent(badReviews, total), caption: "Отрицательные", color: "var(--color-red)"},
        {quantity: neutralReviews, percent: calcPercent(neutralReviews, total), caption: "Нейтральные", color: "#777"},
    ]

    return (
        <>
            {!isLoading && docs?.length ? (
                <ul className={classNames("list-reset", styles.list)}>
                    {items.map((item) => {
                        const { quantity, color, caption, percent } = item;
                        
                        return (
                            <div className={styles.item} key={caption}>
                                <div className={styles.top}>
                                    <h3 className={styles.quantity} style={{ color }}>
                                        {quantity}
                                    </h3>
                                    {percent && (
                                        <span className={styles.percent}>{percent}%</span>
                                    )}
                                </div>
                                <span className={styles.caption}>{caption}</span>
                            </div>
                        );
                    })}
                </ul>
            ) : null}
        </>
    )
}