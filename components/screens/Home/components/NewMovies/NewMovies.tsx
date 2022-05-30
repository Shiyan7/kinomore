import { FC } from 'react'
import { IFilm } from '../../../../../types/IFilm'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import styles from './NewMovies.module.scss'
import classNames from 'classnames'

interface NewMoviesProps {
    films: IFilm[] | undefined
}

export const NewMovies: FC<NewMoviesProps> = ({films}) => {
  return (
    <section className={styles.section}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.top}>
          <h2 className={classNames('g-title', styles.title)}>Фильмы этого года</h2>
          <a href="#" className='g-btn'>Смотреть все</a>
        </div>
        <ul className={classNames('list-reset', styles.grid)}>
          {films?.map(el => (
              <FilmItem key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </section>
  )
}
