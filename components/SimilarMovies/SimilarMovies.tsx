import {FC} from "react"
import {Title} from "../Title/Title";
import styles from './SimilarMovies.module.scss'
import { IMovie } from "@/types/IMovie";
import { Carousel } from "../Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import { FilmItem } from "../FilmItem/FilmItem";

interface SimilarMoviesProps {
    movies: IMovie[] | undefined;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({movies}) => {
    
    return (
        <div className={styles.container}>
            <Title variant='h2' className={styles.title}>Похожее кино</Title>
            <Carousel>
                {movies?.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <FilmItem key={item.id} item={item} />
                        </SwiperSlide>
                    )
                })}
            </Carousel>
        </div>
    )
}