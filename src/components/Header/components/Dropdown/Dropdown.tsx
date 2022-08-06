import {RoutesEnum} from '@/constants/routes';
import {FiFilm, FiHome, FiTv, FiHeart} from 'react-icons/fi';
import {BiMovie} from 'react-icons/bi';
import {useRouter} from 'next/router';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useEffect} from 'react';
import {useActions} from '@/hooks/useActions';
import classNames from "classnames";
import Link from 'next/link';
import styles from './Dropdown.module.scss'

export const Dropdown = () => {

    const items = [
        {icon: <FiHome />, href: RoutesEnum.Home, text: 'Главная'},
        {icon: <FiFilm />, href: RoutesEnum.Films, text: 'Фильмы'},
        {icon: <FiTv />, href: RoutesEnum.Series, text: 'Сериалы'},
        {icon: <BiMovie />, href: RoutesEnum.Cartoons, text: 'Мультики'},
        {icon: <FiHeart />, href: RoutesEnum.Favourites, text: 'Избранное'}
    ]

    const {pathname, events} = useRouter()
    const {toggleMenu} = useActions()

    useEffect(() => {
        events.on("routeChangeComplete", () => toggleMenu(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const {openedMenu} = useTypedSelector(state => state.toggleReducer)
    
    return (
        <div className={classNames(styles.dropdown, openedMenu && styles.dropdownOpen)}>
            <ul className={classNames('list-reset', styles.list)}>
                {items.map(el => {

                    const isCurrentPage = pathname === el.href;

                    return (
                        <li key={el.text} className={styles.item}>
                            <Link href={el.href}>
                                <a className={classNames(styles.link, isCurrentPage && styles.linkActive)}>
                                    {el.icon}
                                    {el.text}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
