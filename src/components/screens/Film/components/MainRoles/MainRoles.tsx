import {FC} from 'react';
import {Carousel} from '@/components/Carousel/Carousel';
import {IMoviePerson} from '@/types/IMovie';
import {SwiperSlide} from 'swiper/react';
import {PersonItem} from '@/components/PersonItem/PersonItem';

interface MainRolesProps {
    roles: IMoviePerson[] | undefined;
}

export const MainRoles: FC<MainRolesProps> = (({roles}) => {

    return (
        <Carousel>
            {roles?.map(item => {
                return (
                    <SwiperSlide key={item.id}>
                        <PersonItem item={item} />
                    </SwiperSlide>
                )
            })}
        </Carousel>
    )
})