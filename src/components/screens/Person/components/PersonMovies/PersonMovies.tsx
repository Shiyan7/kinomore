import {FC} from 'react';
import {Carousel} from '@/components/Carousel/Carousel';
import {IMovie} from '@/types/IMovie';
import {SwiperSlide} from 'swiper/react';
import {FilmItem} from '@/components/FilmItem/FilmItem';

interface PersonMoviesProps {
    movies: IMovie[] | undefined;
}

export const PersonMovies: FC<PersonMoviesProps> = (({movies}) => {

    return (
        <Carousel>
            {movies?.map(item => {
                return (
                    <SwiperSlide key={item.id}>
                        <FilmItem item={item} />
                    </SwiperSlide>
                )
            })}
        </Carousel>
    )
})