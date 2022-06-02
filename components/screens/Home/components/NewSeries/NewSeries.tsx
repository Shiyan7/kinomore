import { FC } from 'react'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import { useGetNewSeriesQuery } from '../../../../../services/KinopoiskService'
import Link from 'next/link'
import { useTypedSelector } from '../../../../../hooks/redux'
import { useDispatch } from 'react-redux'
import { loadMoreSeries } from '../../../../../store/reducers/loadMoreSlice'

export const NewSeries: FC = () => {

  const {seriesLimit} = useTypedSelector(state => state.loadReducer)
  const {data, isFetching} = useGetNewSeriesQuery(seriesLimit)

  const dispatch = useDispatch()

  const handleShowMore = () => dispatch(loadMoreSeries(5))

  const condition = data?.docs.length === data?.total;

  return (
    <section>
      <div className='container g-section__container'>
        <div className='g-section__top'>
          <h2 className='g-title g-section__title'>Сериалы этого года</h2>
          <Link href='/series'>
            <a href="#" className='g-btn'>Смотреть все</a>
          </Link>
        </div>
        <ul className='list-reset g-section__grid'>
          {data?.docs?.map(el => (
              <FilmItem key={el.id} item={el} />
          ))}
        </ul>
        {!condition && <button onClick={handleShowMore} className='btn-reset g-btn g-section__btn'>
          {isFetching ? 'Загрузка...' : 'Показать ещё'}
        </button>}
      </div>
    </section>
  )
}
