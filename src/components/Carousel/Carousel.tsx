import {PropsWithChildren, useRef} from "react";
import SwiperClass, {Navigation} from 'swiper';
import {Swiper} from 'swiper/react';
import {SliderBtn, SliderBtnContainer} from '@/UI/SliderBtn/SliderBtn';
import 'swiper/css';

const breakpoints = {
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
}

export const Carousel = ({children}: PropsWithChildren<{}>) => {

    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)

    const navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }

    const onSwiper = (swiper: SwiperClass) => {
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
    }

    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={15}
            navigation={navigation}
            onSwiper={onSwiper}
            breakpoints={breakpoints}
        >
            {children}
            <SliderBtnContainer>
                <SliderBtn dir='left' ref={navigationPrevRef}/>
                <SliderBtn dir='right' ref={navigationNextRef}/>
            </SliderBtnContainer>
        </Swiper>
    )
}
