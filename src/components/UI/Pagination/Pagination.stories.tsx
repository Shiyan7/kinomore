import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
	title: 'Pagination',
	component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = () => {
	const [page, setPage] = useState<number>(1);

	return <Pagination setPage={setPage} page={page} pages={100} />;
};

export const Default = Template.bind({});
