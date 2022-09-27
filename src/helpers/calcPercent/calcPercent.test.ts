import { calcPercent } from './calcPercent';

describe('процент от ста', () => {
	test('корректное значение', () => {
		expect(calcPercent(70, 300)).toBe('23.33');
	});
	test('некорректное значение', () => {
		expect(calcPercent(70, 300)).not.toBe('24');
	});
});
