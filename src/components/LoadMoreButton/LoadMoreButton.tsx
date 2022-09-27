import { FC, ButtonHTMLAttributes } from 'react';
import { Button } from '@/UI/Button/Button';
import classNames from 'classnames';
import styles from './LoadMoreButton.module.scss';

interface LoadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	condition: boolean;
	isFetching: boolean;
}

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({
	condition,
	isFetching,
	className,
	...props
}) => {
	return (
		<>
			{!condition && (
				<Button disabled={isFetching} className={classNames(styles.btn, className)} {...props}>
					{isFetching ? 'Загрузка...' : 'Показать ещё'}
				</Button>
			)}
		</>
	);
};
