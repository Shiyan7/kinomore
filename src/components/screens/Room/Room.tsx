import { Chat } from './components/Chat/Chat';
import { useGetFilmByIdQuery } from '@/services/KinomoreService';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RoomHeader } from './components/RoomHeader/RoomHeader';
import styles from './Room.module.scss';
import Head from 'next/head';

export const Room = () => {
	const {
		query: { id },
	} = useRouter();
	const { data } = useGetFilmByIdQuery(id);

	const { description, year, name, poster } = { ...data };

	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/player.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	return (
		<section className={styles.content}>
			<Head>
				<meta name="description" content={description} />
				<title>
					{name} ({year}) смотреть онлайн бесплатно в хорошем HD 1080 / 720 качестве
				</title>
				<meta property="og:title" content={`${name} (${year})`} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={poster?.url} />
			</Head>
			<div className={styles.left}>
				<RoomHeader title={name} />
				<div className={styles.videoContainer}>
					<div
						className={styles.video}
						id="kinobd"
						data-resize="1"
						data-bg="#000"
						data-kinopoisk={id}
					></div>
				</div>
			</div>
			<Chat />
		</section>
	);
};
