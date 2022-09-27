import { Slider } from './Slider';
import { render, screen } from '@testing-library/react';

describe('слайдер', () => {
	const onChange = (values: number[]) => values;

	test('разные тесты', () => {
		render(<Slider min={0} max={50} values={[0, 50]} onChange={onChange} />);
		const element = screen.getByTestId('slider');
		expect(element).toBeInTheDocument();
		expect(element).toMatchSnapshot();
	});
});
