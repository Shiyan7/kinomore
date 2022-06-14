import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import { CARTOONS_ROUTE, FILMS_ROUTE, SERIES_ROUTE, YEARS_ROUTE } from '@/constants/routes'
import { Title } from '@/components/Title/Title'
import styles from './Lists.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

export const Lists = ({children}: PropsWithChildren<{}>) => {

  const router = useRouter()

  const items = [
    {txt: 'Фильмы', href: FILMS_ROUTE},
    {txt: 'Сериалы', href: SERIES_ROUTE},
    {txt: 'Мультфильмы', href: CARTOONS_ROUTE},
    {txt: 'Хронология', href: YEARS_ROUTE},
  ]

  return (
    <section className={styles.section}>
      <div className={classNames('container wrapper', styles.wrapper)}>
        <div className={styles.top}>
          <Title className={styles.title}>Списки</Title>
          <ul className={classNames('list-reset', styles.nav)}>
            {items.map(el => (
              <li key={el.txt} className={styles.navItem}>
                <>
                  {router.pathname === el.href
                    ?
                    <span className={classNames(styles.navLink, router.pathname === el.href && styles.navLinkActive)}>{el.txt}</span>
                    :
                    <Link href={el.href}>
                      <a className={classNames(styles.navLink, router.pathname === el.href && styles.navLinkActive)}>{el.txt}</a>
                    </Link>
                  }
                </>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.container}>
          <span className={styles.caption}>Список</span>
          {children}
        </div>
      </div>
    </section>
  )
}