/* eslint-disable @next/next/no-img-element */
import { Title } from "@/components/Title/Title"
import { useRouter } from "next/router"
import { useGetFilmByIdQuery } from "@/services/KinopoiskService"
import { Fragment, useEffect } from "react"
import { BackBtn } from "@/components/BackBtn/BackBtn"
import { convertNumbers } from "@/helpers/convertNumbers/convertNumbers"
import styles from './Film.module.scss'
import classNames from "classnames"

export const Film = () => {
    const {query: {id}} = useRouter()
    const {data} = useGetFilmByIdQuery(id)
    const {ageRating, name, description, shortDescription, fees, year, genres, slogan, budget, movieLength, countries} = {...data}
    const worldFees = fees?.world?.value - fees?.usa?.value;

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://kinobd.ru/js/player_.js"
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    }, [])

    const items = [
        {caption: 'Год производства', value: year, condition: year},
        {caption: 'Страны', value: countries?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: countries?.length},
        {caption: 'Жанр', value: genres?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: genres?.length},
        {caption: 'Слоган', value: slogan, condition: slogan},
        {caption: 'Возраст', value: <span className={styles.age}>{ageRating}+</span>, condition: ageRating},
        {caption: 'Время', value: `${movieLength} мин`, condition: movieLength},
        {caption: 'Бюджет', value: `${budget?.currency} ${convertNumbers(budget?.value)}`, condition: budget?.value},
        {caption: 'Сборы в США', value: `${fees?.usa?.currency} ${convertNumbers(fees?.usa?.value)}`, condition: fees?.usa},
        {caption: 'Сборы в мире', value: `+ ${fees?.world?.currency} ${convertNumbers(worldFees)} = ${fees?.world?.currency} ${convertNumbers(fees?.world?.value)}`, condition: fees?.usa},
    ]

    return (
        <section className={styles.section}>
            <div className='container wrapper'>
                <BackBtn />
                <div className={styles.content}>
                    <div className={styles.left}>
                        <img
                            className={styles.image}
                            src={data?.poster.url}
                            alt={shortDescription}
                        />
                    </div>
                    <div className={styles.right}>
                        <Title classN={styles.title} variant='h1'>{name}</Title>
                        <p className={styles.desc}>{description}</p>
                        <Title variant="h2" classN={styles.subtitle}>О фильме</Title>
                        <ul className={classNames('list-reset', styles.info)}>
                            {items.map(el => (
                                <li key={el.caption} className={styles.infoItem}>
                                    <span className={styles.infoCaption}>{el.caption}</span>
                                    {el.condition ? <span className={styles.infoValue}>{el.value}</span> : '—'}
                                </li>   
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.video} data-kinopoisk={id} id="kinobd"></div>
            </div>
        </section>
    )
}