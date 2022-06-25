import moment from "moment";
import 'moment/locale/ru'
moment.locale('ru')

/* ToDo: переписать на dayjs */

export function convertTimestampToDate (string: string | number | undefined, format: string = 'DD/MM/YYYY') {
    return moment(string).format(format)
}