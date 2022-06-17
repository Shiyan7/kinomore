import moment from "moment";
import 'moment/locale/ru'
moment.locale('ru')

export function convertTimestampToDate (string: string | undefined, format: string = 'DD/MM/YYYY') {
    return moment(string).format(format)
}