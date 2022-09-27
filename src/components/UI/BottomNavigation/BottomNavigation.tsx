import { RoutesEnum } from '@/constants/routes';
import { FiFilm, FiHome, FiTv, FiHeart } from 'react-icons/fi';
import { BiMovie } from 'react-icons/bi';
import classNames from 'classnames';
import styles from './BottomNavigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase';

export const BottomNavigation = () => {
	const items = [
		{ icon: <FiHome />, href: RoutesEnum.Home, text: 'Главная' },
		{ icon: <FiFilm />, href: RoutesEnum.Films, text: 'Фильмы' },
		{ icon: <FiTv />, href: RoutesEnum.Series, text: 'Сериалы' },
		{ icon: <BiMovie />, href: RoutesEnum.Cartoons, text: 'Мультики' },
		{ icon: <FiHeart />, href: RoutesEnum.Favourites, text: 'Избранное' },
	];

	const { pathname, push } = useRouter();

	return (
		<ul className={classNames('list-reset', styles.list)}>
			{items.map((el) => {
				const isCurrentPage = pathname === el.href;

				return (
					<li key={el.text} className={styles.item}>
						<ButtonBase
							ripple
							animationDuration={800}
							onClick={() => push(el.href)}
							className={classNames(styles.link, isCurrentPage && styles.linkActive)}
						>
							{el.icon}
							{el.text}
						</ButtonBase>
					</li>
				);
			})}
		</ul>
	);
};
