import {FC} from "react"
import {IMovie} from "@/types/IMovie";
import {SwiperSlide} from "swiper/react";
import {Title} from "@/components/Title/Title";
import {Carousel} from "@/components/Carousel/Carousel";
import {FilmItem} from "@/components/FilmItem/FilmItem";
import styles from "./SimilarMovies.module.scss"

interface SimilarMoviesProps {
    movies: IMovie[] | undefined;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({movies}) => {
    
    return (
        <div className={styles.container}>
            <Title variant="h2" className={styles.title}>Похожее кино</Title>
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