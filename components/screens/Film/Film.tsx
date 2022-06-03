/* eslint-disable @next/next/no-img-element */
import classNames from "classnames"
import { useRouter } from "next/router"
import { useGetFilmByIdQuery } from "../../../services/KinopoiskService"
import { Fragment, useEffect, useRef, useState } from "react"
import { BackBtn } from "../../BackBtn/BackBtn"
import { yo, yo_resize } from '../../../helpers/player'
import styles from './Film.module.scss'

export const Film = () => {
    const {query: {id}} = useRouter()
    const {data} = useGetFilmByIdQuery(id)
    const {ageRating, name, description, shortDescription, year, genres, slogan, movieLength} = {...data}
    const videoRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        yo(videoRef.current)
        window.addEventListener("resize", yo_resize)
    }, [])

    const items = [
        {caption: 'Год производства', value: year, condition: year},
        {caption: 'Страна', value: data?.countries[0].name, condition: data?.countries.length},
        {caption: 'Жанр', value: genres?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: genres?.length},
        {caption: 'Слоган', value: slogan, condition: slogan},
        {caption: 'Возраст', value: <span className={classNames('g-age', styles.age)}>{ageRating}+</span>, condition: ageRating},
        {caption: 'Время', value: movieLength, condition: movieLength},
    ]

    return (
        <section className={styles.section}>
            <div className={classNames('container', styles.container)}>
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
                <div id="yohoho" className={styles.video} data-kinopoisk={id} data-resize="1" data-tv="1"></div>
            </div>
        </section>
    )
}