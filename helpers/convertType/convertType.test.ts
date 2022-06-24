import {convertType} from './convertType';

describe('конвертирование типа с английского на русский', () => {
    test('корректное значение', () => {
        expect(convertType('film')).toBe('фильм');
    })
})