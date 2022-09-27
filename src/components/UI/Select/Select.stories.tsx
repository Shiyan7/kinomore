import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
	title: 'Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
	const options = [
		{ label: 'Опция 1', value: 'option1' },
		{ label: 'Опция 2', value: 'option2' },
		{ label: 'Опция 3', value: 'option3' },
		{ label: 'Опция 4', value: 'option4' },
		{ label: 'Опция 5', value: 'option5' },
	];

	const [option, setOption] = useState<unknown>(options[0]);

	const onChange = (e: unknown) => setOption(e);

	return (
		<div style={{ maxWidth: '400px' }}>
			<Select value={option} name="select" options={options} onChange={onChange} />
		</div>
	);
};

export const Example = Template.bind({});
