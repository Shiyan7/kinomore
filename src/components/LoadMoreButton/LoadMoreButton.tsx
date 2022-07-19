import {FC, ButtonHTMLAttributes} from 'react'
import {Button} from '@/UI/Button/Button'
import styles from './LoadMoreButton.module.scss'
import classNames from 'classnames';

interface LoadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    condition: boolean;
    isFetching: boolean;
}

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({condition, isFetching, className, ...props}) => {
	return (
		<>
			{!condition &&
				<Button
					disabled={isFetching}
					className={classNames(styles.btn, className)}
					{...props}
				>
					{isFetching ? 'Загрузка...' : 'Показать ещё'}
				</Button>
			}
		</>
	)
}
