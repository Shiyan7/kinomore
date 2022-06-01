import { useRouter } from "next/router"
import { useGetFilmByNameQuery } from "../../../services/KinopoiskService"
import { BackBtn } from "../../BackBtn/BackBtn"
import { FilmItem } from "../../FilmItem/FilmItem"
import styles from './SearchResults.module.scss'

export const SearchResults = () => {

    const {query: {id}} = useRouter()
    const {data, isLoading} = useGetFilmByNameQuery(id)

    return (
        <section className={styles.section}>
            <div className='container g-section__container'>
                <BackBtn />
                <div className='g-section__top'>
                    <h2 className='g-title g-section__title'>Результаты поиска по запросу: {id}</h2>
                </div>
                <ul className='list-reset g-section__grid'>
                {data?.docs?.map(el => (
                    <FilmItem key={el.id} item={el} />
                ))}
                {!data?.docs.length && !isLoading && 'Ничего не найдено!' }
                </ul>
            </div>
        </section>
    )
}
