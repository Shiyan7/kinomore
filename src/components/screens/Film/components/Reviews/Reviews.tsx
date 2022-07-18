import {Title} from '@/UI/Title/Title';
import {Tabs} from '@/UI/Tabs/Tabs';
import {ReviewsInfo} from './components/ReviewsInfo/ReviewsInfo';
import {AllReviews} from './components/AllReviews/AllReviews';
import {GoodReviews} from './components/GoodReviews/GoodReviews';
import {BadReviews} from './components/BadReviews/BadReviews';
import {NeutralReviews} from './components/NeutralReviews/NeutralReviews';
import styles from './Reviews.module.scss';

export const Reviews = () => {

    const tabs = [
        {txt: 'Все рецензии', content: <AllReviews />},
        {txt: 'Положительные', content: <GoodReviews />},
        {txt: 'Отрицательные', content: <BadReviews />},
        {txt: 'Нейтральные', content: <NeutralReviews  />},
    ]

    return (
        <div className={styles.container}>
            <Title variant='h2' className={styles.title}>Рецензии кинокритиков</Title>
            <div className={styles.content}>
                <div className={styles.left}>
                    <Tabs sticky tabs={tabs} />
                </div>
                <ReviewsInfo />
            </div>
        </div>
    )
}