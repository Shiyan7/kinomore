import logoUrl from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'

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