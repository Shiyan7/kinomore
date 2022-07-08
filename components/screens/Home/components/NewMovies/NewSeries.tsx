import {FilmItem} from '@/components/FilmItem/FilmItem'
import {useGetNewSeriesQuery} from '@/services/KinomoreService'
import {useTypedSelector} from '@/hooks/useTypedSelector'
import {RoutesEnum} from '@/constants/routes'
import {Button} from '@/components/Button/Button'
import {Title} from '@/components/Title/Title'
import {useActions} from '@/hooks/useActions'
import {Grid} from '@/components/Grid/Grid'
import styles from './NewMovies.module.scss'
import classNames from 'classnames'
import { useRouter } from 'next/router'

export const NewSeries = () => {

  const {push} = useRouter()
  const {seriesLimit} = useTypedSelector(state => state.loadReducer)
  const {data, isFetching} = useGetNewSeriesQuery(seriesLimit)
  const {loadMoreSeries} = useActions()
  const condition = data?.docs?.length === data?.total;

  return (
    <section>
      <div className={classNames('container', styles.container)}>
        <div className={styles.top}>
          <Title variant='h2'>Новые сериалы</Title>
          <Button onClick={() => push(RoutesEnum.Series)}>Смотреть все</Button>
        </div>
        <Grid>
          {data?.docs?.map(el => (
            <FilmItem key={el.id} item={el} />
          ))}
        </Grid>
        {!condition &&
          <Button
            className={styles.btn}
            onClick={() => loadMoreSeries()}
          >
            {isFetching ? 'Загрузка...' : 'Показать ещё'}
          </Button>
        }
      </div>
    </section>
  )
}
