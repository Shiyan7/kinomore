import { FC } from 'react';
import { BackButton } from '@/UI/BackButton/BackButton';
import styles from './RoomHeader.module.scss';

interface RoomHeaderProps {
	title: string | undefined;
}

export const RoomHeader: FC<RoomHeaderProps> = ({ title }) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<BackButton className={styles.btn} variant="icon" />
				<h1 className={styles.title}>{title}</h1>
			</div>
		</header>
	);
};
