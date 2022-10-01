import { FC } from 'react';
import { Carousel } from '@/components/Carousel/Carousel';
import { IMovie } from '@/types/IMovie';
import { SwiperSlide } from 'swiper/react';
import { FilmItem } from '@/components/FilmItem/FilmItem';
import styles from './PersonMovies.module.scss';

interface PersonMoviesProps {
	movies: IMovie[] | undefined;
}

export const PersonMovies: FC<PersonMoviesProps> = ({ movies }) => {
	console.log(movies);

	return (
		<div className={styles.container}>
			<Carousel title="Фильмы и сериалы" quantity={movies?.length}>
				{movies?.map((el, idx) => {
					const { rating, ...item } = el;

					return (
						<SwiperSlide className={styles.item} key={idx}>
							<FilmItem item={item} />
						</SwiperSlide>
					);
				})}
			</Carousel>
		</div>
	);
};
