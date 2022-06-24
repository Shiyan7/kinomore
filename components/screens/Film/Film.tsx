/* eslint-disable @next/next/no-img-element */
import {Title} from "@/components/Title/Title"
import {BackBtn} from "@/components/BackBtn/BackBtn"
import {MovieFavorite} from "@/components/MovieFavorite/MovieFavorite"
import {convertType} from "@/helpers/convertType/convertType"
import {MovieRating} from "@/components/MovieRating/MovieRating"
import {useRouter} from "next/router"
import {useGetFilmByIdQuery} from "@/services/KinopoiskService"
import {FilmInfo} from "./components/FilmInfo/FilmInfo"
import {FilmDetails} from "./components/FilmDetails/FilmDetails"
import {SimilarMovies} from "@/components/SimilarMovies/SimilarMovies"
import {Button} from "@/components/Button/Button"
import {FiPlay} from "react-icons/fi"
import {useFavourites} from "@/hooks/useFavourite"
import styles from './Film.module.scss'
import classNames from "classnames"

export const Film = () => {
    const {query: { id }} = useRouter();
    const {data} = useGetFilmByIdQuery(id)
    const {
		alternativeName,
		name,
		type,
		shortDescription,
		year,
		rating,
		similarMovies,
    } = { ...data };

	const { favourites } = useFavourites();

    const isFavourite = favourites.includes(Number(id))

    return (
      <section className={styles.section}>
        <div className={classNames('container wrapper', styles.container)}>
        	<BackBtn />
			<div className={styles.content}>
				<div className={styles.left}>
					<img className={styles.image} src={data?.poster.url} alt={shortDescription} />
					<MovieRating rating={rating} />
				</div>
				<div className={styles.right}>
					<Title className={styles.title} variant="h1">
						{name} ({year})
					</Title>
					<span className={styles.originalTitle}>{alternativeName}</span>
					<div className={styles.btns}>
						<Button href={`/room/${id}`} className={styles.btn} variant="regular">
							<FiPlay />
							Смотреть
						</Button>
						<MovieFavorite isFavourite={isFavourite} className={styles.btn} variant="regular" id={data?.id} />
					</div>
					<Title variant="h2" className={styles.subtitle}>
						О {convertType(type)}е
					</Title>
					<FilmInfo data={data} />
				</div>
			</div>
			<FilmDetails data={data} />
			{similarMovies?.length ? <SimilarMovies movies={similarMovies} /> : null}
        </div>
      </section>
    );
}