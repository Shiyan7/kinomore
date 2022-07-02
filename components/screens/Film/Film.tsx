/* eslint-disable @next/next/no-img-element */
import {Title} from "@/components/Title/Title"
import {BackBtn} from "@/components/BackBtn/BackBtn"
import {MovieFavorite} from "@/components/MovieFavorite/index"
import {convertType} from "@/helpers/convertType/convertType"
import {MovieRating} from "@/components/MovieRating/MovieRating"
import {useRouter} from "next/router"
import {useGetFilmByIdQuery} from "@/services/KinopoiskService"
import {Info} from "@/components/Info/Info"
import {SimilarMovies} from "./components/SimilarMovies/SimilarMovies"
import {Button} from "@/components/Button/Button"
import {FiPlay} from "react-icons/fi"
import {useFavourites} from "@/hooks/useFavourite"
import {Fragment} from "react"
import {convertNumbers} from "@/helpers/convertNumbers/convertNumbers"
import {convertTimestampToDate} from "@/helpers/convertTimestampToDate/convertTimestampToDate"
import {Tabs} from "@/components/Tabs/Tabs"
import {MainRoles} from "./components/MainRoles/MainRoles"
import {Facts} from "@/components/Facts/Facts"
import styles from './Film.module.scss'
import classNames from "classnames"

export const Film = () => {
    const {push, query: {id}} = useRouter();
    const {data, isLoading, isError} = useGetFilmByIdQuery(id)
    const {
        alternativeName,
        name,
        type,
        shortDescription,
        year,
        rating,
        similarMovies,
        ageRating,
        fees,
        genres,
        slogan,
        budget,
        movieLength,
        countries,
        premiere,
        description,
        facts,
        persons
    } = {...data};

    const worldFees = fees?.world?.value - fees?.usa?.value;

    const items = [
        {caption: 'Страны', value: countries?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: countries?.length},
        {caption: 'Жанр', value: genres?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: genres?.length},
        {caption: 'Слоган', value: slogan, condition: slogan},
        {caption: 'Возраст', value: <span className={styles.age}>{ageRating}+</span>, condition: ageRating},
        {caption: 'Бюджет', value: `${budget?.currency} ${convertNumbers(budget?.value)}`, condition: budget?.value},
        {caption: 'Время', value: `${movieLength} мин`, condition: movieLength},
        {caption: 'Сборы в США', value: `${fees?.usa?.currency} ${convertNumbers(fees?.usa?.value)}`, condition: fees?.usa},
        {caption: 'Сборы в мире', value: `+ ${fees?.world?.currency} ${convertNumbers(worldFees)} = ${fees?.world?.currency} ${convertNumbers(fees?.world?.value)}`, condition: fees?.usa},
        {caption: 'Премьера в мире' , value: convertTimestampToDate(premiere?.world, "D MMMM YYYY"), condition: premiere?.world},
    ]

    const roles = persons?.filter(el => {
        if (el.enProfession === 'actor' && el.name?.length) {
            return el;
        }
    });

    const tabs = [
        {txt: 'Описание', content: <p className={styles.desc}>{description}</p>, condition: description?.length},
        {txt: 'Актёры', content: <MainRoles roles={roles}/>, condition: roles?.length},
        {txt: 'Факты', content: <Facts facts={facts}/>, condition: facts?.length},
    ]

    const {favourites} = useFavourites();
    const isFavourite = favourites.includes(Number(id))
    const movieTitle = name ? name : isLoading ? 'Загрузка' : 'Без названия'
    const movieYear = year && `(${year})`

    return (
        <section className={styles.section}>
            <div className={classNames('container wrapper', styles.container)}>
                <div className={styles.top}>
                    <BackBtn/>
                </div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <img className={styles.image} src={data?.poster?.url} alt={shortDescription}/>
                        <MovieRating rating={rating}/>
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
                                startIcon={<FiPlay/>}
                            >
                                Смотреть
                            </Button>
                            <MovieFavorite
                                isFavourite={isFavourite}
                                className={styles.btn}
                                variant="regular"
                                id={data?.id}
                                disabled={isError}
                            />
                        </div>
                        <Title variant="h2" className={styles.subtitle}>
                            О {convertType(type)}е
                        </Title>
                        <Info items={items}/>
                    </div>
                </div>
                <Tabs tabs={tabs}/>
                {similarMovies?.length ? <SimilarMovies movies={similarMovies}/> : null}
            </div>
        </section>
    );
}