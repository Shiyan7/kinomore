import classNames from 'classnames'
import Link from 'next/link'
import { CARTOONS_ROUTE, FILMS_ROUTE, SERIES_ROUTE } from '../../constants/routes'
import { Logo } from '../Logo/Logo'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.container)}>
        <Logo />
        <ul className={classNames('list-reset', styles.list)}>
          <li className={styles.item}>
            <Link href={FILMS_ROUTE}>
              <a className={styles.link}>Фильмы</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={SERIES_ROUTE}>
              <a className={styles.link}>Сериалы</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={CARTOONS_ROUTE}>
              <a className={styles.link}>Мультфильмы</a>
            </Link>
          </li>
        </ul>
        <span className={styles.copy}>© 2022 Kinomore</span>
      </div>
    </footer>
  )
}