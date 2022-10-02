import { FC, useState } from 'react';
import { ButtonBase } from '@/components/UI/ButtonBase/ButtonBase';
import { getReviewColor } from '@/helpers/getReviewColor/getReviewColor';
import { IReview } from '@/types/IReview';
import { convertTimestampToDate } from '@/helpers/convertTimestampToDate/convertTimestampToDate';
import { ReviewButtons } from './components/ReviewButtons/ReviewButtons';
import classNames from 'classnames';
import styles from './ReviewItem.module.scss';

interface ReviewItemProps {
	item: IReview;
}

export const ReviewItem: FC<ReviewItemProps> = ({ item }) => {
	const { date, type, review, reviewDislikes, reviewLikes, title } = item;
	const [isTruncated, setIsTruncated] = useState<boolean>(true);
	const color = getReviewColor(type);

	return (
		<div className={classNames(styles.item)} style={{ backgroundColor: color }}>
			<div className={styles.content}>
				{title && <h3 className={styles.title}>{title}</h3>}
				<p
					className={classNames(styles.review, isTruncated && styles.truncated)}
					dangerouslySetInnerHTML={{ __html: review }}
				></p>
				<ButtonBase
					ripple
					animationDuration={400}
					className={styles.showMore}
					onClick={() => setIsTruncated((prev) => !prev)}
				>
					{isTruncated ? 'показать всю рецензию' : 'скрыть рецензию'}
				</ButtonBase>
			</div>
			<div className={styles.bottom}>
				<span className={styles.date}>{convertTimestampToDate(date, 'D MMMM YYYY')}</span>
				<ReviewButtons likes={reviewLikes} dislikes={reviewDislikes} />
			</div>
		</div>
	);
};
