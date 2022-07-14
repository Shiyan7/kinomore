import { FC } from 'react';
import { BackBtn } from '@/UI/BackBtn/BackBtn';
import styles from './RoomHeader.module.scss';

interface RoomHeaderProps {
  title?: string;
  id?: number;
}

export const RoomHeader: FC<RoomHeaderProps> = ({ title, id }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <BackBtn href={`/film/${id}`} className={styles.btn} variant="icon" />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  );
};
