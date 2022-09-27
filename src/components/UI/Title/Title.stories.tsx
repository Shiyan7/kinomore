import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from './Title';

export default {
	title: 'Title',
	component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = () => {
	return <Title>Заголовок</Title>;
};

export const Example = Template.bind({});
