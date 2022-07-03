import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Введите имя',
};

export const Dark = Template.bind({});
Dark.args = {
    variant: 'dark',
    placeholder: 'Введите имя'
};