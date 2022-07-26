export function convertMovieType (type: string | undefined) {
    switch(type) {
        case 'film':
            return 'фильм'
        case 'tv-series':
        case 'animated-series':
        case 'anime':
            return 'сериал'
        case 'carton':
            return 'мультик'
        default:
            return 'фильм'
    }
}