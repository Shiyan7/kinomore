import { Button } from '@/UI/Button/Button';
import { RoutesEnum } from '@/constants/routes';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './NotFound.module.scss';
import Head from 'next/head';

export const NotFound = () => {
	const { push } = useRouter();

	return (
		<section className={styles.section}>
			<Head>
				<title>Ошибка 404</title>
			</Head>
			<div className={classNames('container', styles.container)}>
				<h1 className={styles.title}>404. Страница не найдена</h1>
				<p className={styles.desc}>
					Возможно, она была перемещена, или вы просто неверно указали адрес страницы.
				</p>
				<Button onClick={() => push(RoutesEnum.Home)} className={styles.link}>
					Вернуться на главную
				</Button>
			</div>
		</section>
	);
};
