/* eslint-disable @next/next/no-img-element */
import classNames from "classnames"
import { useRouter } from "next/router"
import { useGetFilmByIdQuery } from "../../../services/KinopoiskService"
import { Fragment, useEffect, useRef, useState } from "react"
import { BackBtn } from "../../BackBtn/BackBtn"
import {kbp, kb_resize} from '../../../helpers/player'
import styles from './Film.module.scss'

export const Film = () => {
    const {query: {id}} = useRouter()
    
    const {data} = useGetFilmByIdQuery(id)

    const videoRef = useRef<HTMLDivElement>(null)

    const {ageRating, name, description, shortDescription, year, genres, slogan, movieLength} = {...data}

    useEffect(() => {
        kbp(videoRef.current)
        window.addEventListener("resize", kb_resize)
    }, [])

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
                            <li className={styles.infoItem}>
                                <span className={styles.infoCaption}>Год производства</span>
                                <span className={styles.infoValue}>{year}</span>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoCaption}>Страна</span>
                                <span className={styles.infoValue}>{data?.countries[0].name}</span>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoCaption}>Жанр</span>
                                <span className={styles.infoValue}>{genres?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>)}</span>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoCaption}>Слоган</span>
                                <span className={styles.infoValue}>{slogan}</span>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoCaption}>Возраст</span>
                                {ageRating ?
                                    <span className={styles.infoValue}>
                                        <span className={classNames('g-age', styles.age)}>{ageRating}+</span>
                                    </span>
                                : '—'}
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoCaption}>Время</span>
                                <span className={styles.infoValue}>{movieLength} мин</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div ref={videoRef} className={styles.video} data-kinopoisk={id} id="kinobd"></div>
            </div>
        </section>
    )
}