import { convertTimestampToDate } from './convertTimestampToDate';

describe('ковертирование даты', () => {
	test('корректное значение', () => {
		expect(convertTimestampToDate('2022-06-16')).toBe('16/06/2022');
	});
	test('некорректное значение', () => {
		expect(convertTimestampToDate('2022-06-16')).not.toBe('2022-06-16');
	});
});
