import Link from 'next/link'
import classNames from 'classnames'
import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <section className={styles.section}>
        <div className={classNames('container', styles.container)}>
            <h1 className={classNames('g-title', styles.title)}>404. Страница не найдена</h1>
            <p className={styles.desc}>Возможно, она была перемещена, или вы просто неверно указали адрес страницы.</p>
            <Link href='/'>
                <a className={classNames('g-btn', styles.link)}>Вернуться на главную</a>
            </Link>
        </div>
    </section>
  )
}
