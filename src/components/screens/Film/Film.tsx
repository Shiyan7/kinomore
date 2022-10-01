/* eslint-disable @next/next/no-img-element */
import { Title } from '@/UI/Title/Title';
import { BackButton } from '@/UI/BackButton/BackButton';
import { convertMovieType } from '@/helpers/convertMovieType/convertMovieType';
import { MovieRating } from '@/UI/MovieRating/MovieRating';
import { useRouter } from 'next/router';
import { useGetFilmByIdQuery } from '@/services/KinomoreService';
import { Button } from '@/UI/Button/Button';
import { FiPlay } from 'react-icons/fi';
import { Reviews, MovieFavorite, SimilarMovies, FilmTabs, FilmInfo } from './components';
import classNames from 'classnames';
import styles from './Film.module.scss';

export const Film = () => {
	const {
		push,
		query: { id },
	} = useRouter();
	const { data, isLoading, isError } = useGetFilmByIdQuery(id);
	const { alternativeName, name, type, shortDescription, year, rating, similarMovies } = { ...data };
	const movieTitle = name ? name : isLoading ? 'Загрузка' : 'Без названия';
	const movieYear = year && `(${year})`;

	return (
		<section className={styles.section}>
			<div className={classNames('container wrapper', styles.container)}>
				<div className={styles.top}>
					<BackButton />
				</div>
				<div className={styles.content}>
					<div className={styles.left}>
						<img className={styles.image} src={data?.poster?.url} alt={shortDescription} />
						<MovieRating className={styles.rating} rating={rating} />
					</div>
					<div className={styles.right}>
						<Title className={styles.title} variant="h1">
							{movieTitle} {movieYear}
						</Title>
						<span className={styles.originalTitle}>{alternativeName}</span>
						<div className={styles.btns}>
							<Button
								onClick={() => push(`/room/${data?.id}`)}
								className={styles.btn}
								variant="regular"
								disabled={isError}
								startIcon={<FiPlay />}
							>
								Смотреть
							</Button>
							<MovieFavorite
								className={styles.btn}
								variant="regular"
								id={data?.id}
								disabled={isError}
							/>
						</div>
						<Title variant="h2" className={styles.subtitle}>
							О {convertMovieType(type)}е
						</Title>
						<FilmInfo data={data} />
					</div>
				</div>
				<FilmTabs data={data} />
				{similarMovies?.length ? <SimilarMovies movies={similarMovies} /> : null}
				<Reviews />
			</div>
		</section>
	);
};
