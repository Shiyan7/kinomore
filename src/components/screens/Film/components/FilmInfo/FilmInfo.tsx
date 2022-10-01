import { FC, Fragment } from 'react';
import { Info } from '@/components/Info/Info';
import { IMovie } from '@/types/IMovie';
import { convertNumbers } from '@/helpers/convertNumbers/convertNumbers';
import { convertTimestampToDate } from '@/helpers/convertTimestampToDate/convertTimestampToDate';
import styles from './FilmInfo.module.scss';

interface FilmInfoProps {
	data: IMovie | undefined;
}

export const FilmInfo: FC<FilmInfoProps> = ({ data }) => {
	const { countries, genres, slogan, budget, ageRating, movieLength, fees, premiere } = { ...data };

	/* @ts-ignore */
	const worldFees = fees?.world?.value - fees?.usa?.value;

	const items = [
		{
			caption: 'Страны',
			value: countries?.map((el, idx) => (
				<Fragment key={idx}>
					{idx ? ', ' : ''}
					{el.name}
				</Fragment>
			)),
			condition: countries?.length,
		},
		{
			caption: 'Жанр',
			value: genres?.map((el, idx) => (
				<Fragment key={idx}>
					{idx ? ', ' : ''}
					{el.name}
				</Fragment>
			)),
			condition: genres?.length,
		},
		{ caption: 'Слоган', value: slogan, condition: slogan },
		{
			caption: 'Возраст',
			value: <span className={styles.age}>{ageRating}+</span>,
			condition: ageRating,
		},
		{
			caption: 'Бюджет',
			value: `${budget?.currency} ${convertNumbers(budget?.value)}`,
			condition: budget?.value,
		},
		{ caption: 'Время', value: `${movieLength} мин`, condition: movieLength },
		{
			caption: 'Сборы в США',
			value: `${fees?.usa?.currency} ${convertNumbers(fees?.usa?.value)}`,
			condition: fees?.usa.currency,
		},
		{
			caption: 'Сборы в мире',
			value: `+ ${fees?.world?.currency} ${convertNumbers(worldFees)} = ${
				fees?.world?.currency
			} ${convertNumbers(fees?.world?.value)}`,
			condition: fees?.usa.currency,
		},
		{
			caption: 'Премьера в мире',
			value: convertTimestampToDate(premiere?.world, 'D MMMM YYYY'),
			condition: premiere?.world,
		},
	];

	return <Info items={items} />;
};
