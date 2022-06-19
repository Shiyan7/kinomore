import {Swiper, SwiperSlide} from 'swiper/react';
import {PersonItem} from "@/components/PersonItem/PersonItem"
import {memo} from 'react';
import {IPerson} from '@/types/IPerson';
import 'swiper/css';

interface MainRolesProps {
    roles: IPerson[] | undefined;
}

export const MainRoles = memo<MainRolesProps>(({roles}) => {

    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={15}
            breakpoints={{
                577: {
                    slidesPerView: 3,
                },
                769: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1025: {
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
        </Swiper>
    )
})

MainRoles.displayName = 'MainRoles'