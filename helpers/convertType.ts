export function convertType (type: string) {
    switch(type) {
        case "tv-series":
            return 'сериал'
        case "carton":
            return 'мультик'
        default:
            return 'фильм'
    }
}