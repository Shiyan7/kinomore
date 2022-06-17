/* eslint-disable @next/next/no-img-element */
import {Title} from "@/components/Title/Title"
import {useRouter} from "next/router"
import {useGetFilmByIdQuery} from "@/services/KinopoiskService"
import {Fragment, useEffect } from "react"
import {BackBtn} from "@/components/BackBtn/BackBtn"
import {convertNumbers} from "@/helpers/convertNumbers/convertNumbers"
import {convertTimestampToDate} from "@/helpers/convertTimestampToDate/convertTimestampToDate"
import {Button} from "@/components/Button/Button"
import {FiPlay} from "react-icons/fi"
import {MovieFavorite} from "@/components/MovieFavorite/MovieFavorite"
import {convertType} from "@/helpers/convertType/convertType"
import {Tab, TabList, TabPanel, Tabs } from "react-tabs"
import {MovieRating} from "@/components/MovieRating/MovieRating"
import styles from './Film.module.scss'
import classNames from "classnames"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PersonItem } from "@/components/PersonItem/PersonItem"

export const Film = () => {
    const {query: {id}} = useRouter()
    const {data} = useGetFilmByIdQuery(id)
    const {
        ageRating,
        alternativeName,
        name,
        type,
        description,
        shortDescription,
        facts,
        fees,
        year,
        genres,
        slogan,
        budget,
        movieLength,
        countries,
        rating,
        premiere,
        persons,
        votes,
    } = {...data}
    
    const worldFees = fees?.world?.value - fees?.usa?.value;
    const mainRoles = persons?.filter(el => {
        if (el.enProfession === 'actor' && el.name?.length) {
          return el;
        }
    });

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://kinobd.ru/js/player_.js"
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    }, [])

    const items = [
        {caption: 'Страны', value: countries?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: countries?.length},
        {caption: 'Жанр', value: genres?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: genres?.length},
        {caption: 'Слоган', value: slogan, condition: slogan},
        {caption: 'Возраст', value: <span className={styles.age}>{ageRating}+</span>, condition: ageRating},
        {caption: 'Время', value: `${movieLength} мин`, condition: movieLength},
        {caption: 'Бюджет', value: `${budget?.currency} ${convertNumbers(budget?.value)}`, condition: budget?.value},
        {caption: 'Сборы в США', value: `${fees?.usa?.currency} ${convertNumbers(fees?.usa?.value)}`, condition: fees?.usa},
        {caption: 'Сборы в мире', value: `+ ${fees?.world?.currency} ${convertNumbers(worldFees)} = ${fees?.world?.currency} ${convertNumbers(fees?.world?.value)}`, condition: fees?.usa},
        {caption: 'Премьера в мире' , value: convertTimestampToDate(premiere?.world, "D MMMM YYYY"), condition: premiere?.world},
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

                        <MovieRating rating={rating} />
                    </div>
                    <div className={styles.right}>
                        {name && <Title className={styles.title} variant='h1'>{name} ({year})</Title>}
                        <span className={styles.originalTitle}>{alternativeName}</span>
                        <div className={styles.btns}>
                            <Button className={styles.btn}>
                                Смотреть
                                <FiPlay />
                            </Button>
                            <MovieFavorite className={styles.btn} variant='stroke' id={id}>
                                В избранное
                            </MovieFavorite>
                        </div>
                        <Title variant="h2" className={styles.subtitle}>О {convertType(type)}е</Title>
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
                <Tabs>
                    <TabList>
                        <Tab>Описание</Tab>
                        <Tab>Актёры</Tab>
                        {facts && <Tab>Факты</Tab>}
                    </TabList>
                    <TabPanel>
                        <p className={styles.desc}>{description}</p>
                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            breakpoints={{
                                577: {
                                  slidesPerView: 3,
                                },
                                769: {
                                  slidesPerView: 4,
                                },
                                1025: {
                                  slidesPerView: 6,
                                },
                              }}
                        >
                            {mainRoles?.map(item => {
                                return (
                                    <SwiperSlide className={styles.personsItem} key={item.id}>
                                        <PersonItem item={item} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </TabPanel>
                    {facts &&
                        <TabPanel>
                            <Title variant="h2" className={styles.factsTitle}>Знаете ли вы, что…</Title>
                            <ul className={classNames('list-reset', styles.facts)}>
                                {facts?.map(el => (
                                    <li key={el.value} className={styles.factsItem} dangerouslySetInnerHTML={{__html: el.value}} />
                                ))}
                            </ul>
                        </TabPanel>
                    }
                </Tabs>
                <div className={styles.video} data-kinopoisk={id} id="kinobd"></div>
            </div>
        </section>
    )
}