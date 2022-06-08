import { FC } from 'react'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import { useGetNewFilmsQuery } from '../../../../../services/KinopoiskService'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'
import { FILMS_ROUTE } from '../../../../../constants/routes'
import { Button } from '../../../../Button/Button'
import { Title } from '../../../../Title/Title'
import { useActions } from '../../../../../hooks/useActions'

export const NewMovies: FC = () => {

  const {filmsLimit} = useTypedSelector(state => state.loadReducer)
  const {data, isFetching} = useGetNewFilmsQuery(filmsLimit)
  const {loadMoreFilms} = useActions()
  const condition = data?.docs?.length === data?.total
  
  return (
    <section>
      <div className='container g-section__container'>
        <div className='g-section__top'>
          <Title variant='h2' classN='g-section__title'>Новые фильмы</Title>
          <Button href={FILMS_ROUTE}>Смотреть все</Button>
        </div>
        <ul className='list-reset g-section__grid'>
          {data?.docs?.map(el => (
              <FilmItem key={el.id} item={el} />
          ))}
        </ul>
        {!condition &&
          <Button
            classN='g-section__btn'
            onClick={loadMoreFilms}
          >
            {isFetching ? 'Загрузка...' : 'Показать ещё'}
          </Button>
        }
      </div>
    </section>
  )
}
