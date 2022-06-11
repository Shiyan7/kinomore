import {convertNumbers} from './convertNumbers'

describe('конвертирование числа в читабельный вид', () => {
    test('корректное значение', () => {
        expect(convertNumbers(200000)).toBe('200 000');
    })
})