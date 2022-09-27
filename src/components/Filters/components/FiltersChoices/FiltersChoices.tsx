import { FC } from 'react';
import { Chip } from '@/UI/Chip/Chip';
import { FieldValues } from 'react-hook-form';
import styles from './FiltersChoices.module.scss';

type IFilter = {
	sort: string;
	genres: {
		label: string;
		value: string;
	};
	rating: number[];
	year: number[];
};

interface FiltersChoicesProps {
	choices: FieldValues | IFilter;
}

export const FiltersChoices: FC<FiltersChoicesProps> = ({ choices }) => {
	const { genres, rating, year, sort } = choices;

	return (
		<div className={styles.choices}>
			<Chip className={styles.choice}>
				Рейтинг: {rating[0]} - {rating[1]}
			</Chip>
			<Chip className={styles.choice}>
				Года производства: {year[0]} - {year[1]}
			</Chip>
			<Chip className={styles.choice}>Жанр: {genres.label}</Chip>
			<Chip className={styles.choice}>
				Год выхода: {sort === '-1' ? 'Сначала новые' : 'Сначала старые'}
			</Chip>
		</div>
	);
};
