import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { FiArrowRight } from 'react-icons/fi';

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Текст кнопки',
};

export const Stroke = Template.bind({});
Stroke.args = {
	children: 'Текст кнопки',
	variant: 'stroke',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Текст кнопки',
	variant: 'sm',
};

export const Regular = Template.bind({});
Regular.args = {
	children: 'Текст кнопки',
	variant: 'regular',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	children: 'Подробнее',
	endIcon: <FiArrowRight />,
};
