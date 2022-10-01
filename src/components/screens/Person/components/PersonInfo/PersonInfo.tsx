import { Info } from '@/components/Info/Info';
import { convertTimestampToDate } from '@/helpers/convertTimestampToDate/convertTimestampToDate';
import { IPerson } from '@/types/IPerson';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';

interface PersonInfoProps {
	data: IPerson | undefined;
}

export const PersonInfo: FC<PersonInfoProps> = ({ data }) => {
	const { profession, growth, sex, birthday, spouses, movies, death } = { ...data };

	const countFilms = Number(movies?.length) - 1;

	const items = [
		{
			caption: 'Карьера',
			value: profession?.map((el, idx) => (
				<Fragment key={idx}>
					{idx ? ', ' : ''}
					{el.value}
				</Fragment>
			)),
			condition: profession?.length,
		},
		{ caption: 'Пол', value: sex, condition: sex },
		{ caption: 'Рост', value: `${growth} см`, condition: growth },
		{
			caption: 'Дата рождения',
			value: convertTimestampToDate(birthday, 'D MMMM YYYY'),
			condition: birthday,
		},
		{
			caption: 'Дата смерти',
			value: convertTimestampToDate(death, 'D MMMM YYYY'),
			condition: death,
		},
		{ caption: 'Всего фильмов', value: countFilms, condition: movies },
		{
			caption: 'Супруга',
			value: spouses?.map((el, idx) => (
				<Fragment key={idx}>
					{idx ? ', ' : ''}
					<Link href={`/name/${el.id}`}>
						<a>{el.name}</a>
					</Link>
					&nbsp;{el.divorcedReason}
				</Fragment>
			)),
			condition: spouses?.length,
		},
	];

	return <Info items={items} />;
};
