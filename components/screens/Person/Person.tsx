/* eslint-disable @next/next/no-img-element */
import {Title} from "@/components/Title/Title"
import {BackBtn} from "@/components/BackBtn/BackBtn"
import {useRouter} from "next/router"
import {useGetFilmsByIdQuery, useGetPersonByIdQuery} from "@/services/KinopoiskService"
import {convertTimestampToDate} from "@/helpers/convertTimestampToDate/convertTimestampToDate"
import {Info} from "@/components/Info/Info"
import {Fragment} from "react"
import {Facts} from "@/components/Facts/Facts"
import styles from './Person.module.scss'
import classNames from "classnames"
import { Tabs } from "@/components/Tabs/Tabs"
import { PersonMovies } from "./components/PersonMovies/PersonMovies"

export const Person = () => {
    const {query: {id}} = useRouter();
    const {data} = useGetPersonByIdQuery(id)
    const {
        name,
        enName,
        photo,
        growth,
        birthday,
        death,
        sex,
        movies,
        profession,
        spouses,
        facts
    } = {...data};

    /* @ts-ignore */
    const countFilms = movies?.length - 1

    const query = movies?.map(el => `search=${el.id}&field=id`).join('&')
    const {data: personMovies} = useGetFilmsByIdQuery({query, limit: countFilms + 1})

    const items = [
        {caption: 'Карьера', value: profession?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.value}</Fragment>), condition: profession?.length},
        {caption: 'Пол', value: sex, condition: sex},
        {caption: 'Рост', value: `${growth} см`, condition: growth},
        {caption: 'Дата рождения', value: convertTimestampToDate(birthday, "D MMMM YYYY"), condition: birthday},
        {caption: 'Дата смерти', value: convertTimestampToDate(death, "D MMMM YYYY"), condition: death},
        {caption: 'Всего фильмов', value: countFilms, condition: movies},
        {caption: 'Супруга', value: spouses?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}&nbsp;{el.divorcedReason}</Fragment>), condition: spouses?.length},
    ]

    const tabs = [
        {txt: 'Факты', content: <Facts facts={facts} />, condition: facts?.length},
        {txt: 'Фильмы и сериалы', content: <PersonMovies movies={personMovies?.docs} />, condition: personMovies},
    ]

    return (
        <section className={styles.section}>
            <div className={classNames('container wrapper', styles.container)}>
                <div className={styles.top}>
                    <BackBtn/>
                </div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <img className={styles.image} src={photo} alt={name}/>
                    </div>
                    <div className={styles.right}>
                        <Title className={styles.title} variant="h1">{name}</Title>
                        <span className={styles.originalTitle}>{enName}</span>
                        <Title variant="h2" className={styles.subtitle}>
                            О персоне
                        </Title>
                        <Info items={items} />
                    </div>
                </div>
                <Tabs tabs={tabs} />
            </div>
        </section>
    );
}