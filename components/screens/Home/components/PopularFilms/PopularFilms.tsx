import classNames from 'classnames'
import { FC } from 'react'
import { IFilm } from '../../../../../types/IFilm'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import styles from './PopularFilms.module.scss'

interface PopularFilmsProps {
    films: IFilm[] | undefined
}

export const PopularFilms: FC<PopularFilmsProps> = ({films}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={classNames('g-title', styles.title)}>Популярные фильмы</h2>
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
