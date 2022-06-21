import {FC} from "react"
import {Title} from "../Title/Title";
import {ISimilarMovie} from "@/types/ISimilarMovie"
import {FilmItem} from "../FilmItem/FilmItem";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './SimilarMovies.module.scss'

interface SimilarMoviesProps {
    movies: ISimilarMovie[] | undefined;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({movies}) => {
    
    return (
        <div className={styles.container}>
            <Title variant='h2' className={styles.title}>Похожее кино</Title>
            <Swiper
                slidesPerView={2}
                spaceBetween={15}
                breakpoints={{
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                }}
            >
                {movies?.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <FilmItem key={item.id} item={item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}