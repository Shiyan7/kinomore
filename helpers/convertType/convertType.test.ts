import {convertType} from './convertType';

describe('конвертирование типа с апи на русский', () => {
    test('пример конвертирования', () => {
        expect(convertType('tv-series')).toBe('сериал');
    })
})