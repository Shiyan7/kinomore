import {FC} from 'react';
import {Carousel} from '@/components/Carousel/Carousel';
import {IMovie} from '@/types/IMovie';
import {SwiperSlide} from 'swiper/react';
import {FilmItem} from '@/components/FilmItem/FilmItem';
import styles from './PersonMovies.module.scss'

interface PersonMoviesProps {
    movies: IMovie[] | undefined;
    countFilms: number
}

export const PersonMovies: FC<PersonMoviesProps> = (({movies, countFilms}) => {

    return (
        <div className={styles.container}>
            <Carousel title='Фильмы и сериалы' quantity={countFilms}>
                {movies?.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <FilmItem item={item} />
                        </SwiperSlide>
                    )
                })}
            </Carousel>
        </div>
    )
})