import {FilmItem} from '@/components/FilmItem/FilmItem'
import {useGetNewFilmsQuery} from '@/services/KinopoiskService'
import {useTypedSelector} from '@/hooks/useTypedSelector'
import {FILMS_ROUTE} from '@/constants/routes'
import {Button} from '@/components/Button/Button'
import {Title} from '@/components/Title/Title'
import {useActions} from '@/hooks/useActions'
import styles from './NewMovies.module.scss'
import classNames from 'classnames'
import { Grid } from '@/components/Grid/Grid'

export const NewFilms = () => {

  const {filmsLimit} = useTypedSelector(state => state.loadReducer)
  const {data, isFetching} = useGetNewFilmsQuery(filmsLimit)
  const {loadMoreFilms} = useActions()
  const condition = data?.docs?.length === data?.total
  
  return (
    <section>
      <div className={classNames('container', styles.container)}>
        <div className={styles.top}>
          <Title variant='h2'>Новые фильмы</Title>
          <Button href={FILMS_ROUTE}>Смотреть все</Button>
        </div>
        <Grid>
          {data?.docs?.map(el => (
            <FilmItem key={el.id} item={el} />
          ))}
        </Grid>
        {!condition &&
          <Button
            className={styles.btn}
            onClick={() => loadMoreFilms()}
          >
            {isFetching ? 'Загрузка...' : 'Показать ещё'}
          </Button>
        }
      </div>
    </section>
  )
}
