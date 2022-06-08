export function convertType (type: string) {
    switch(type) {
        case "tv-series":
            return 'сериал'
        case "carton":
            return 'мультик'
        case "anime":
            return 'аниме'
        default:
            return 'фильм'
    }
}