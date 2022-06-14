import { FilmItem } from '@/components/FilmItem/FilmItem'
import { useGetNewFilmsQuery } from '@/services/KinopoiskService'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FILMS_ROUTE } from '@/constants/routes'
import { Button } from '@/components/Button/Button'
import { Title } from '@/components/Title/Title'
import { useActions } from '@/hooks/useActions'

export const NewMovies = () => {

  const {filmsLimit} = useTypedSelector(state => state.loadReducer)
  const {data, isFetching} = useGetNewFilmsQuery(filmsLimit)
  const {loadMoreFilms} = useActions()
  const condition = data?.docs?.length === data?.total

  const handleLoadMore = () => loadMoreFilms(5)
  
  return (
    <section>
      <div className='container g-section__container'>
        <div className='g-section__top'>
          <Title variant='h2' className='g-section__title'>Новые фильмы</Title>
          <Button href={FILMS_ROUTE}>Смотреть все</Button>
        </div>
        <ul className='list-reset g-section__grid'>
          {data?.docs?.map(el => (
              <FilmItem key={el.id} item={el} />
          ))}
        </ul>
        {!condition &&
          <Button
            className='g-section__btn'
            onClick={handleLoadMore}
          >
            {isFetching ? 'Загрузка...' : 'Показать ещё'}
          </Button>
        }
      </div>
    </section>
  )
}
