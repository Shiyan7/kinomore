import styles from './Header.module.scss'
import {FiFilm, FiMenu, FiHome, FiUser, FiTv, FiHeart, FiSearch} from 'react-icons/fi'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search } from './Search'

export const Header = () => {

    const items = [
        {icon: <FiHome />, href: '/', text: 'Главная'},
        {icon: <FiFilm />, href: '/films', text: 'Фильмы'},
        {icon: <FiTv />, href: '/series', text: 'Сериалы'},
        {icon: <FiHeart />, href: '/favorites', text: 'Избранное'},
        {icon: <FiUser />, href: '/auth', text: 'Войти'}
    ]

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={classNames('container', styles.container)}>
                <div className={styles.top}>
                    <div className={styles.burger}>
                        <FiMenu />
                    </div>
                    <Link href="/">
                        <a className={styles.logo}>Kinomore</a>
                    </Link>
                    <div className={styles.dropdown}>
                        <ul className={classNames('list-reset', styles.dropdownList)}>
                            {items.map(el => (
                                <li key={el.text} className={styles.dropdownItem}>
                                    <Link href={el.href}>
                                        <a className={classNames(styles.dropdownLink, router.pathname === el.href && styles.dropdownLinkActive)}>
                                            {el.icon}
                                            {el.text}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Search />
                <Link href="/auth">
                    <a className={styles.link}>Войти</a>
                </Link>
            </div>
        </header>
    )
}
