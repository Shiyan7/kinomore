import {Title} from '@/UI/Title/Title';
import {ReviewsInfo} from './components/ReviewsInfo/ReviewsInfo';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {useGetReviewsByIdQuery} from '@/services/KinomoreService';
import {LoadMoreButton} from '@/components/LoadMoreButton/LoadMoreButton';
import {Spinner, SpinnerSizes} from '@/components/UI/Spinner/Spinner';
import {ReviewItem} from './components/ReviewItem/ReviewItem';
import styles from './Reviews.module.scss';

export const Reviews = () => {

    const {query: {id}} = useRouter()
    const [limit, setLimit] = useState<number>(3)
    const {data, isFetching, isLoading} = useGetReviewsByIdQuery({id, limit})
    const {docs, total} = {...data}
    const condition = data?.docs?.length === data?.total

    const Content = () => {
        return (
            <>
                {docs?.map(item => {
                    return (
                        <ReviewItem key={item.id} item={item} />
                    )
                })}
                <LoadMoreButton
                    className={styles.loadMore}
                    isFetching={isFetching}
                    condition={condition}
                    onClick={() => setLimit(prev => prev + 3)}
                />
            </>
        )
    }
    
    const Loader = () => {
        return (
            <div className={styles.loader}>
                <Spinner size={SpinnerSizes.medium} />
            </div>
        )
    }
    
    return (
        <>
            {docs?.length ? (
                <div className={styles.container}>
                    <Title variant="h2" className={styles.title}>Рецензии кинокритиков</Title>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            {isLoading ? <Loader /> : <Content />}
                        </div>
                        <ReviewsInfo limit={total} />
                    </div>
                </div>
            ) : null}
      </>
    )
}