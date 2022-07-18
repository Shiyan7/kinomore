import {LoadMoreButton} from '@/components/LoadMoreButton/LoadMoreButton'
import {ReviewItem} from '@/components/ReviewItem/ReviewItem'
import {useGetAllReviewsByIdQuery} from '@/services/KinomoreService'
import {useRouter} from 'next/router'
import {useState} from 'react'
import styles from '../../Reviews.module.scss'

export const AllReviews = () => {

    const {query: {id}} = useRouter()
    const [limit, setLimit] = useState<number>(3)
    const {data, isFetching} = useGetAllReviewsByIdQuery({id, limit})
    const {docs} = {...data}

    const condition = data?.docs?.length === data?.total

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