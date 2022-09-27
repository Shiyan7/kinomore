import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './Chip';

export default {
	title: 'Chip',
	component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = () => <Chip>Какой-то текст</Chip>;

export const Example = Template.bind({});
