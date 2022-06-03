import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../hooks/redux"
import { useGetFilmByNameQuery } from "../../../services/KinopoiskService"
import { loadMoreResults } from "../../../store/reducers/loadMoreSlice"
import { BackBtn } from "../../BackBtn/BackBtn"
import { FilmItem } from "../../FilmItem/FilmItem"
import styles from './SearchResults.module.scss'

export const SearchResults = () => {

    const {query: {id}} = useRouter()
    
    const {resultsLimit} = useTypedSelector(state => state.loadReducer)
    const dispatch = useDispatch()

    const handleShowMore = () => dispatch(loadMoreResults(5))

    const {data, isLoading, isFetching} = useGetFilmByNameQuery({search: id, limit: resultsLimit})

    const condition = data?.docs.length === data?.total;

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
                <p className={styles.desc}>{!data?.docs.length && !isLoading ? 'Ничего не найдено!' : isLoading && 'Загрузка' }</p>
                </ul>
                {!condition && <button onClick={handleShowMore} className='btn-reset g-btn g-section__btn'>
                    {isFetching ? 'Загрузка...' : 'Показать ещё'}
                </button>}
            </div>
        </section>
    )
}
