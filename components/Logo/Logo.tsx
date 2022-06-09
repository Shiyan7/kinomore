import logoUrl from '@/public/logo.svg'
import styles from './Logo.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
    return (
        <Link href='/'>
            <a className={styles.logo}>
                <Image
                    layout="fill"
                    src={logoUrl}
                    alt="Kinomore"
                />
            </a>
        </Link>
    )
}
