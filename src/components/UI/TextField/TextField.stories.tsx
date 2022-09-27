import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';

export default {
	title: 'TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

const errorMessage = 'Поле обязательно для заполнения';

const DefaultFieldTemplate: ComponentStory<typeof TextField> = (args) => (
	<div style={{ display: 'grid', rowGap: 15 }}>
		<TextField style={{ maxWidth: 300 }} {...args} />
		<TextField error errorMessage={errorMessage} style={{ maxWidth: 300 }} {...args} />
	</div>
);

export const DefaultTextField = DefaultFieldTemplate.bind({});
DefaultTextField.args = {
	placeholder: 'Какой-то текст',
};

const DarkTemplate: ComponentStory<typeof TextField> = (args) => (
	<div style={{ display: 'grid', rowGap: 15 }}>
		<TextField style={{ maxWidth: 300 }} {...args} />
		<TextField error errorMessage={errorMessage} style={{ maxWidth: 300 }} {...args} />
	</div>
);

export const DarkTextField = DarkTemplate.bind({});
DarkTextField.args = {
	placeholder: 'Какой-то текст',
	variant: 'dark',
};

const SmallFieldTeamplte: ComponentStory<typeof TextField> = (args) => (
	<div style={{ display: 'grid', rowGap: 15 }}>
		<TextField style={{ maxWidth: 300 }} {...args} />
		<TextField error errorMessage={errorMessage} style={{ maxWidth: 300 }} {...args} />
	</div>
);

export const SmallTextField = SmallFieldTeamplte.bind({});
SmallTextField.args = {
	placeholder: 'Какой-то текст',
	variant: 'small',
};
