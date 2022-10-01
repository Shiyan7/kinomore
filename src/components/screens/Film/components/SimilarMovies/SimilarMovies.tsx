import { FC } from 'react';
import { IMovie } from '@/types/IMovie';
import { SwiperSlide } from 'swiper/react';
import { Carousel } from '@/components/Carousel/Carousel';
import { FilmItem } from '@/components/FilmItem/FilmItem';
import styles from './SimilarMovies.module.scss';

interface SimilarMoviesProps {
	movies: IMovie[] | undefined;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({ movies }) => {
	return (
		<div className={styles.container}>
			<Carousel title="Похожее кино" quantity={movies?.length}>
				{movies?.map((item) => {
					return (
						<SwiperSlide className={styles.item} key={item.id}>
							<FilmItem key={item.id} item={item} />
						</SwiperSlide>
					);
				})}
			</Carousel>
		</div>
	);
};
