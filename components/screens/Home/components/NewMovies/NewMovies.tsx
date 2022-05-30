import { FC } from 'react'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import styles from './NewMovies.module.scss'
import classNames from 'classnames'
import { useGetNewFilmsQuery } from '../../../../../services/KinopoiskService'

export const NewMovies: FC = () => {

  const {data} = useGetNewFilmsQuery('')

  return (
    <section className={styles.section}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.top}>
          <h2 className={classNames('g-title', styles.title)}>Фильмы этого года</h2>
          <a href="#" className='g-btn'>Смотреть все</a>
        </div>
        <ul className={classNames('list-reset', styles.grid)}>
          {data?.docs?.map(el => (
              <FilmItem key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </section>
  )
}
