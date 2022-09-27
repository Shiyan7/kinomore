import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio';

export default {
	title: 'Radio',
	component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
	<div style={{ display: 'grid', gap: 10 }}>
		<Radio value="value1" label="Опция 1" name="Radio" defaultChecked />
		<Radio value="value2" label="Опция 2" name="Radio" />
	</div>
);

export const Example = Template.bind({});
