import { FC } from 'react';
import { ButtonBase } from '@/components/UI/ButtonBase/ButtonBase';
import { BiLike, BiDislike } from 'react-icons/bi';
import styles from './ReviewButtons.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { RoutesEnum } from '@/constants/routes';

interface ReviewButtonsProps {
	likes: number;
	dislikes: number;
}

export const ReviewButtons: FC<ReviewButtonsProps> = ({ likes, dislikes }) => {
	const { push } = useRouter();

	/* ToDo: написать бекенд, и реализовать функционал */
	const liked = null;

	const handleClick = () => {
		push(RoutesEnum.Login);
	};

	return (
		<div className={styles.btns}>
			<ButtonBase
				startIcon={<BiLike />}
				onClick={handleClick}
				className={classNames(styles.btn, styles.like, liked && styles.active)}
			>
				Полезно
				{likes && <span className={styles.quantity}>{likes}</span>}
			</ButtonBase>
			<ButtonBase
				startIcon={<BiDislike />}
				onClick={handleClick}
				className={classNames(styles.btn, styles.dislike, liked === false && styles.active)}
			>
				Нет
				{dislikes && <span className={styles.quantity}>{dislikes}</span>}
			</ButtonBase>
		</div>
	);
};
