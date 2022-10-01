import { FC } from 'react';
import { Facts } from '@/components/Facts/Facts';
import { Tabs } from '@/UI/Tabs/Tabs';
import { IPerson } from '@/types/IPerson';
import { PersonMovies } from '../index';

interface PersonTabsProps {
	data: IPerson | undefined;
}

export const PersonTabs: FC<PersonTabsProps> = ({ data }) => {
	const { movies, facts } = { ...data };

	const tabs = [
		{
			txt: 'Фильмы и сериалы',
			content: <PersonMovies movies={movies} />,
			condition: movies,
		},
		{ txt: 'Факты', content: <Facts facts={facts} />, condition: facts?.length },
	];

	return <Tabs tabs={tabs} />;
};
