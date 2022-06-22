import {FC, useRef} from "react"
import {Title} from "../Title/Title";
import {ISimilarMovie} from "@/types/ISimilarMovie"
import {FilmItem} from "../FilmItem/FilmItem";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {SliderBtn, SliderBtnContainer} from '@/components/SliderBtn/SliderBtn';
import 'swiper/css';
import styles from './SimilarMovies.module.scss'

interface SimilarMoviesProps {
    movies: ISimilarMovie[] | undefined;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({movies}) => {

    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)
    
    return (
        <div className={styles.container}>
            <Title variant='h2' className={styles.title}>Похожее кино</Title>
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={15}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = navigationNextRef.current;
            
                        // Re-init navigation
                        swiper.navigation.destroy()
                        swiper.navigation.init()
                        swiper.navigation.update()
                    })
                }}
                breakpoints={{
                    769: {
                        slidesPerGroup: 3,
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1025: {
                        slidesPerGroup: 4,
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerGroup: 5,
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
                <SliderBtnContainer>
                    <SliderBtn dir='left' ref={navigationPrevRef} />
                    <SliderBtn dir='right' ref={navigationNextRef} />
                </SliderBtnContainer>
            </Swiper>
        </div>
    )
}