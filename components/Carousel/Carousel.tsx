import {Navigation} from 'swiper';
import {Swiper} from 'swiper/react';
import {SliderBtn, SliderBtnContainer} from '@/components/SliderBtn/SliderBtn';
import 'swiper/css';
import {PropsWithChildren, useRef} from "react";

export const Carousel = ({children}: PropsWithChildren<{}>) => {

    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)

    return (
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
            {children}
            <SliderBtnContainer>
                <SliderBtn dir='left' ref={navigationPrevRef}/>
                <SliderBtn dir='right' ref={navigationNextRef}/>
            </SliderBtnContainer>
        </Swiper>
    )
}
