export function convertType (type: string | undefined) {
    switch(type) {
        case "tv-series":
        case "animated-series":
            return 'сериал'
        case "carton":
            return 'мультик'
        case "anime":
            return 'аниме'
        default:
            return 'фильм'
    }
}