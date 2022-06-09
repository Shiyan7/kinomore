import { useRouter } from "next/router"
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { useGetFilmByNameQuery } from "@/services/KinopoiskService"
import { BackBtn } from "@/components/BackBtn/BackBtn"
import { FilmItem } from "@/components/FilmItem/FilmItem"
import { Title } from "@/components/Title/Title"
import { Button } from "@/components/Button/Button"
import styles from './SearchResults.module.scss'
import classNames from "classnames"

export const SearchResults = () => {

    const {query: {id}} = useRouter()
    const {resultsLimit} = useTypedSelector(state => state.loadReducer)
    const {data, isLoading, isFetching} = useGetFilmByNameQuery({search: id, limit: resultsLimit})
    const {loadMoreResults} = useActions()
    const condition = data?.docs.length === data?.total;

    const handleLoadMore = () => loadMoreResults(5)

    return (
        <section className={styles.section}>
            <div className='container g-section__container'>
                <BackBtn />
                <Title variant="h2" classN={classNames('g-section__title', styles.title)}>Результаты поиска по запросу: {id}</Title>
                <ul className='list-reset g-section__grid'>
                {data?.docs?.map(el => (
                    <FilmItem key={el.id} item={el} />
                ))}
                <p className={styles.desc}>{!data?.docs.length && !isLoading ? 'Ничего не найдено!' : isLoading && 'Загрузка' }</p>
                </ul>
                {!condition && <Button onClick={handleLoadMore} classN='g-section__btn'>
                    {isFetching ? 'Загрузка...' : 'Показать ещё'}
                </Button>}
            </div>
        </section>
    )
}
