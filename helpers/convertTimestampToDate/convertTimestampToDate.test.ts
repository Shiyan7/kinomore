import { convertTimestampToDate } from "./convertTimestampToDate";

describe('ковертирование даты', () => {
    test('корректное значение', () => {
        expect(convertTimestampToDate('2022-06-16')).toBe('16/06/2022')
    })
})