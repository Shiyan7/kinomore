import classNames from 'classnames'
import Link from 'next/link'
import { Logo } from '../Logo/Logo'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.container)}>
        <Logo />
        <ul className={classNames('list-reset', styles.list)}>
          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}>Фильмы</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}>Сериалы</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href='/'>
              <a className={styles.link}>Мультики</a>
            </Link>
          </li>
        </ul>
        <span className={styles.copy}>© 2022 Kinomore</span>
      </div>
    </footer>
  )
}