import { TextField } from './TextField';
import { fireEvent, render, screen } from '@testing-library/react';

describe('инпут', () => {
	test('разные тесты', () => {
		render(<TextField placeholder="Какой-то текст" />);
		const element = screen.getByTestId('input');
		expect(element).toBeInTheDocument();
		expect(element).toHaveValue('');
		fireEvent.input(element, {
			target: { value: 'Какой-то текст' },
		});
		expect(element).toHaveValue('Какой-то текст');
		expect(element.tagName).toEqual('INPUT');
		expect(element).toMatchSnapshot();
	});
});
