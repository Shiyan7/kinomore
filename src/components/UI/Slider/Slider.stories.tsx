import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './Slider';
import { useState } from 'react';

export default {
	title: 'Slider',
	component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = () => {
	const [values, setValues] = useState([0, 50]);

	const onChange = (values: number[]) => {
		setValues(values);
	};

	return (
		<div style={{ maxWidth: '400px' }}>
			<Slider min={0} max={50} step={5} values={values} onChange={onChange} />
		</div>
	);
};

export const Example = Template.bind({});
