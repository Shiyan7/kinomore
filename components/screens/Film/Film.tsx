/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import { useGetFilmByIdQuery } from "../../../services/KinopoiskService"
import { Fragment, useEffect } from "react"
import { BackBtn } from "../../BackBtn/BackBtn"
import { normalPrice } from "../../../helpers/normalPrice"
import styles from './Film.module.scss'
import classNames from "classnames"

export const Film = () => {
    const {query: {id}} = useRouter()
    const {data} = useGetFilmByIdQuery(id)
    const {ageRating, name, description, shortDescription, fees, year, genres, slogan, budget, movieLength, countries} = {...data}
    const worldFees = fees?.world?.value - fees?.usa?.value;

    console.log(data);

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
        {caption: 'Возраст', value: <span className={classNames('g-age', styles.age)}>{ageRating}+</span>, condition: ageRating},
        {caption: 'Время', value: `${movieLength} мин`, condition: movieLength},
        {caption: 'Бюджет', value: `${budget?.currency} ${normalPrice(budget?.value)}`, condition: budget?.value},
        {caption: 'Сборы в США', value: `${fees?.usa?.currency} ${normalPrice(fees?.usa?.value)}`, condition: fees?.usa},
        {caption: 'Сборы в мире', value: `+ ${fees?.world?.currency} ${normalPrice(worldFees)} = ${fees?.world?.currency} ${normalPrice(fees?.world?.value)}`, condition: fees?.usa},
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
                        <h1 className={classNames('g-title', styles.title)}>{name}</h1>
                        <p className={styles.desc}>{description}</p>
                        <h2 className={classNames('g-title', styles.subtitle)}>О фильме</h2>
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