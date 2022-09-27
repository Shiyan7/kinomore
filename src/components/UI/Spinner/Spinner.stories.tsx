import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner, SpinnerSizes } from './Spinner';

export default {
	title: 'Spinner',
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Small = Template.bind({});
Small.args = {
	size: SpinnerSizes.small,
};

export const Medium = Template.bind({});
Medium.args = {
	size: SpinnerSizes.medium,
};

export const Dark = Template.bind({});
Dark.args = {
	variant: 'dark',
};
