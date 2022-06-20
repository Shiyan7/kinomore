/* eslint-disable @next/next/no-img-element */
import {Title} from "@/components/Title/Title"
import {useEffect } from "react"
import {BackBtn} from "@/components/BackBtn/BackBtn"
import {MovieFavorite} from "@/components/MovieFavorite/MovieFavorite"
import {convertType} from "@/helpers/convertType/convertType"
import {MovieRating} from "@/components/MovieRating/MovieRating"
import {useRouter} from "next/router"
import {useGetFilmByIdQuery} from "@/services/KinopoiskService"
import {FilmInfo} from "./components/FilmInfo/FilmInfo"
import {FilmDetails} from "./components/FilmDetails/FilmDetails"
import { SimilarMovies } from "@/components/SimilarMovies/SimilarMovies"
import styles from './Film.module.scss'

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
		similarMovies
    } = {...data}

    useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://kinobd.ru/js/player_.js";
		document.body.appendChild(script);
		
		return () => {
			document.body.removeChild(script);
		};
    }, []);

    return (
      <section className={styles.section}>
        <div className="container wrapper">
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
					<MovieFavorite className={styles.btn} variant="regular" id={id}>
						В избранное
					</MovieFavorite>
					<Title variant="h2" className={styles.subtitle}>
						О {convertType(type)}е
					</Title>
					<FilmInfo data={data} />
				</div>
			</div>
			<FilmDetails data={data} />
			<div className={styles.video} data-kinopoisk={id} id="kinobd" />
			{similarMovies?.length ? <SimilarMovies movies={similarMovies} /> : null}
        </div>
      </section>
    );
}