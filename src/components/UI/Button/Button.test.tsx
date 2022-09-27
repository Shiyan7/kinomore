import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('кнопка', () => {
	beforeEach(() => jest.useFakeTimers());

	test('разные тесты', () => {
		render(<Button>Button text</Button>);
		const element = screen.getByTestId('button');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toEqual('BUTTON');
		expect(element).toHaveStyle('position: relative; overflow: hidden;');
		expect(element).toMatchSnapshot();
	});

	test('клик на кнопку', () => {
		const { asFragment } = render(<Button>Ripple</Button>);

		userEvent.click(screen.getByTestId('button'));
		jest.runAllTimers();

		expect(asFragment()).toMatchSnapshot();
	});
});
