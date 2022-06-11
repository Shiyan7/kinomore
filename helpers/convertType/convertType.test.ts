import {convertType} from './convertType';

test('конвертирование типа с английского на русский', () => {
    expect(convertType('film')).toBe('фильм');
})