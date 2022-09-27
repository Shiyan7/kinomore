import { Pagination } from './Pagination';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

describe('пагинация', () => {
	beforeEach(() => jest.useFakeTimers());
	window.scrollTo = jest.fn();

	const Wrapper = () => {
		const [page, setPage] = useState<number>(1);
		return <Pagination page={page} setPage={setPage} pages={100} />;
	};

	test('проверка всё ли ок', () => {
		render(<Wrapper />);
		const element = screen.getByTestId('pagination');
		expect(element).toBeInTheDocument();
		expect(element).toMatchSnapshot();
	});

	test('работает ли клик по кнопке вперёд', () => {
		const { asFragment } = render(<Wrapper />);

		userEvent.click(screen.getByTestId('pagination-next-btn'));
		jest.runAllTimers();
		expect(screen.getByTestId('pagination-value')).toHaveTextContent('2 / 100');

		expect(asFragment()).toMatchSnapshot();
	});

	test('работает ли клик по кнопке назад', () => {
		const { asFragment } = render(<Wrapper />);

		userEvent.click(screen.getByTestId('pagination-prev-btn'));
		jest.runAllTimers();
		expect(screen.getByTestId('pagination-value')).toHaveTextContent('1 / 100');

		expect(asFragment()).toMatchSnapshot();
	});
	test('работает ли клик по кнопке последняя страница', () => {
		const { asFragment } = render(<Wrapper />);

		userEvent.click(screen.getByTestId('pagination-last-btn'));
		jest.runAllTimers();
		expect(screen.getByTestId('pagination-value')).toHaveTextContent('100 / 100');

		expect(asFragment()).toMatchSnapshot();
	});

	test('работает ли клик по кнопке первая страница', () => {
		const { asFragment } = render(<Wrapper />);

		userEvent.click(screen.getByTestId('pagination-first-btn'));
		jest.runAllTimers();
		expect(screen.getByTestId('pagination-value')).toHaveTextContent('1 / 100');

		expect(asFragment()).toMatchSnapshot();
	});
});
