import {getReviewColor} from './getReviewColor';

describe('получение цвета по типу', () => {
    test('корректное значение', () => {
        expect(getReviewColor('Позитивный')).toBe('#d9f0e1');
    })
    test('некорректное значение', () => {
        expect(getReviewColor('Позитивный')).not.toBe('Позитивный');
        expect(getReviewColor('Позитивный')).not.toBe(undefined);
    })
})