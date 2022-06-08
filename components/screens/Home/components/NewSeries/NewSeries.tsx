import { FC } from 'react'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import { useGetNewSeriesQuery } from '../../../../../services/KinopoiskService'
import Link from 'next/link'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { loadMoreSeries } from '../../../../../store/reducers/loadMoreSlice'
import { SERIES_ROUTE } from '../../../../../constants/routes'
import { Button } from '../../../../Button/Button'
import { Title } from '../../../../Title/Title'

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
          <Title variant='h2' classN='g-section__title'>Новые сериалы</Title>
          <Button href={SERIES_ROUTE}>Смотреть все</Button>
        </div>
        <ul className='list-reset g-section__grid'>
          {data?.docs?.map(el => (
              <FilmItem key={el.id} item={el} />
          ))}
        </ul>
        {!condition &&
          <Button
            classN='g-section__btn'
            onClick={handleShowMore}
          >
            {isFetching ? 'Загрузка...' : 'Показать ещё'}
          </Button>
        }
      </div>
    </section>
  )
}
