import styles from './Header.module.scss'
import {FiFilm, FiMenu, FiHome, FiUser, FiTv, FiHeart, FiSearch} from 'react-icons/fi'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search } from '../Search/Search'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

export const Header = () => {

    const items = [
        {icon: <FiHome />, href: '/', text: 'Главная'},
        {icon: <FiFilm />, href: '/films', text: 'Фильмы'},
        {icon: <FiTv />, href: '/series', text: 'Сериалы'},
        {icon: <FiHeart />, href: '/favorites', text: 'Избранное'},
        {icon: <FiUser />, href: '/auth', text: 'Войти'}
    ]

    const router = useRouter()
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open)

    return (
        <header className={styles.header}>
            <div className={classNames('container', styles.container)}>
                
                <OutsideClickHandler onOutsideClick={handleOpen}>
                    <div className={styles.top}>
                        <button
                            className={classNames('btn-reset', styles.burger)}
                            onClick={handleOpen}
                        >
                            <FiMenu />
                        </button>
                        <span className={styles.logo}>Kinomore</span>
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
                </OutsideClickHandler>
                <Search />
                <Link href="/auth">
                    <a className={styles.link}>Войти</a>
                </Link>
            </div>
        </header>
    )
}
