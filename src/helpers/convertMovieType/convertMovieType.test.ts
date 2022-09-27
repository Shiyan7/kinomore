import { convertMovieType } from './convertMovieType';

describe('конвертирование типа с английского на русский', () => {
	test('корректное значение', () => {
		expect(convertMovieType('film')).toBe('фильм');
	});
	test('некорректное значение', () => {
		expect(convertMovieType('film')).not.toBe('film');
		expect(convertMovieType('film')).not.toBe(undefined);
	});
});
