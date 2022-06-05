import styles from './Header.module.scss'
import {FiFilm, FiMenu, FiHome, FiUser, FiTv, FiHeart, FiX} from 'react-icons/fi'
import {BiMovie} from 'react-icons/bi'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search } from '../Search/Search'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { Logo } from '../Logo/Logo'
import { CARTOONS_ROUTE, FAVORITES_ROUTE, FILMS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SERIES_ROUTE } from '../../constants/routes'

export const Header = () => {

    const ref = useRef(null)
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }

    useOnClickOutside(ref, () => setOpen(false))

    const items = [
        {icon: <FiHome />, href: HOME_ROUTE, text: 'Главная'},
        {icon: <FiFilm />, href: FILMS_ROUTE, text: 'Фильмы'},
        {icon: <FiTv />, href: SERIES_ROUTE, text: 'Сериалы'},
        {icon: <BiMovie />, href: CARTOONS_ROUTE, text: 'Мультфильмы'},
        {icon: <FiHeart />, href: FAVORITES_ROUTE, text: 'Избранное'},
        {icon: <FiUser />, href: LOGIN_ROUTE, text: 'Войти'}
    ]

    return (
        <header className={styles.header}>
            <div className={classNames('container', styles.container)}>
                <div ref={ref} className={styles.menu}>
                    <button
                        className={classNames('btn-reset', styles.burger)}
                        onClick={handleOpen}
                    >
                        {open ? <FiX /> : <FiMenu /> }
                    </button>
                    <Logo />
                    <div className={classNames(styles.dropdown, open && styles.dropdownOpen)}>
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
