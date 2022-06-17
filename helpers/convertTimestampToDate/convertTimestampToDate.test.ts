import { convertTimestampToDate } from "./convertTimestampToDate";

test('ковертирование даты', () => {
    expect(convertTimestampToDate('2022-06-16')).toBe('16/06/2022')
})