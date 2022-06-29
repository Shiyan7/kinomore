import {useActions} from "@/hooks/useActions";
import {Search} from '@/components/Search/Search';
import {useRef} from 'react';
import {useOnClickOutside} from 'usehooks-ts';
import {Logo} from '@/components/Logo/Logo';
import {Device} from '@/components/Device';
import {Burger} from './components/Burger/Burger';
import {Dropdown} from './components/Dropdown/Dropdown';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export const Header = () => {

    const ref = useRef(null)
    const {toggleMenu} = useActions()

    useOnClickOutside(ref, () => toggleMenu(false))

    return (
        <header className={styles.header}>
            <div className={classNames('container', styles.container)}>
                <div ref={ref} className={styles.left}>
                    <Burger />
                    <Logo className={styles.logo} />
                    <Dropdown />
                    <Device mobile>
                        <Link href="/auth">
                            <a className={classNames(styles.link, styles.menuLink)}>Войти</a>
                        </Link>
                    </Device>
                </div>
                <Search />
                <Device desktop>
                    <Link href="/auth">
                        <a className={styles.link}>Войти</a>
                    </Link>
                </Device>
            </div>
        </header>
    )
}
