import {BackBtn} from '@/components/BackBtn/BackBtn';
import {useRouter} from 'next/router';
import {FC} from 'react'
import styles from './RoomHeader.module.scss'

interface RoomHeaderProps {
    title: string | undefined;
}

export const RoomHeader: FC<RoomHeaderProps> = ({title}) => {

    const {push, query: { id }} = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <BackBtn
                    onClick={() => push(`/film/${id}`)}
                    className={styles.btn}
                    variant='icon'
                />
                <h1 className={styles.title}>{title}</h1>
            </div>
        </header>
    )
}