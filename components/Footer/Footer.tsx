import {getCurrentYear} from '@/helpers/getCurrentYear/getCurrentYear'
import {Logo} from '@/components/Logo/Logo'
import {RoutesEnum} from '@/constants/routes'
import styles from './Footer.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

export const Footer = () => {

    const items = [
        {href: RoutesEnum.Films, text: 'Фильмы'},
        {href: RoutesEnum.Series, text: 'Сериалы'},
        {href: RoutesEnum.Cartoons, text: 'Мультфильмы'},
    ]

    return (
        <footer className={styles.footer}>
            <div className={classNames('container', styles.container)}>
                <Logo/>
                <ul className={classNames('list-reset', styles.list)}>
                    {items.map(el => (
                        <li key={el.text} className={styles.item}>
                            <Link href={el.href}>
                                <a className={styles.link}>{el.text}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <span className={styles.copy}>© {getCurrentYear()} Kinomore</span>
            </div>
        </footer>
    )
}