import { FC } from 'react'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import { useGetNewFilmsQuery } from '../../../../../services/KinopoiskService'
import { useDispatch } from 'react-redux'
import { loadMoreFilms } from '../../../../../store/reducers/loadMoreSlice'
import { useTypedSelector } from '../../../../../hooks/redux'
import Link from 'next/link'

export const NewMovies: FC = () => {

  const {filmsLimit} = useTypedSelector(state => state.loadReducer)
  const {data, isFetching} = useGetNewFilmsQuery(filmsLimit)

  const dispatch = useDispatch()

  const handleShowMore = () => dispatch(loadMoreFilms(5))

  const condition = data?.docs.length === data?.total;

  return (
    <section>
      <div className='container g-section__container'>
        <div className='g-section__top'>
          <h2 className='g-title g-section__title'>Фильмы этого года</h2>
          <Link href='/films'>
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
