import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import {PersonItem} from "@/components/PersonItem/PersonItem";
import {SliderBtn, SliderBtnContainer} from '@/components/SliderBtn/SliderBtn';
import {FC, useRef} from 'react';
import {IPerson} from '@/types/IPerson';
import 'swiper/css';

interface MainRolesProps {
    roles: IPerson[] | undefined;
}

export const MainRoles: FC<MainRolesProps> = (({roles}) => {

    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)

    return (
        <>
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
                    577: {
                        slidesPerGroup: 3,
                        slidesPerView: 3,
                    },
                    769: {
                        slidesPerGroup: 4,
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1025: {
                        slidesPerGroup: 6,
                        slidesPerView: 6,
                        spaceBetween: 30
                    },
                }}
            >
                {roles?.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <PersonItem item={item} />
                        </SwiperSlide>
                    )
                })}
                <SliderBtnContainer>
                    <SliderBtn dir='left' ref={navigationPrevRef} />
                    <SliderBtn dir='right' ref={navigationNextRef} />
                </SliderBtnContainer>
            </Swiper>
        </>
    )
})