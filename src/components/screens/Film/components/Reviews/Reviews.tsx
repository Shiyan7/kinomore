import {useGetReviewsByIdQuery} from '@/services/KinomoreService';
import {useRouter} from 'next/router';
import {Title} from '@/UI/Title/Title';
import {Tabs} from '@/UI/Tabs/Tabs';
import {ReviewsContent} from './components/ReviewsContent/ReviewsContent';
import {ReviewsInfo} from './components/ReviewsInfo/ReviewsInfo';
import styles from './Reviews.module.scss';

export const Reviews = () => {

    const {query: {id}} = useRouter()

    const {data, isLoading} = useGetReviewsByIdQuery({id, limit: 11231230})

    const {docs, total} = {...data}

    const goodReviews = docs?.filter(rev => rev?.type === 'Позитивный')
    const badReviews = docs?.filter(rev => rev?.type === 'Негативный')
    const neutralReviews = docs?.filter(rev => rev?.type === 'Нейтральный')

    const tabs = [
        {txt: 'Все рецензии', content: <ReviewsContent reviews={docs} />, condition: docs?.length},
        {txt: 'Положительные', content: <ReviewsContent reviews={goodReviews} />, condition: goodReviews?.length},
        {txt: 'Отрицательные', content: <ReviewsContent reviews={badReviews} />, condition: badReviews?.length},
        {txt: 'Нейтральные', content: <ReviewsContent reviews={neutralReviews} />, condition: neutralReviews?.length},
    ]

    return (
        <>
            {docs?.length && !isLoading ? (
                <div className={styles.container}>
                    <Title className={styles.title} variant='h2'>Рецензии кинокритиков</Title>
                    <div className={styles.content}>
                        <Tabs sticky tabs={tabs} />
                        <ReviewsInfo
                            total={total}
                            goodReviews={goodReviews?.length}
                            badReviews={badReviews?.length}
                            neutralReviews={neutralReviews?.length}
                        />
                    </div>
                </div>
            ) : null}
        </>
    )
}