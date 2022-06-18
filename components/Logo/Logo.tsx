import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './Logo.module.scss'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({className}) => {
  return (
    <Link href='/'>
      <a className={classNames(styles.logo, className)}>
        <Image
          layout="fill"
          src='/logo.svg'
          alt="Kinomore"
        />
      </a>
    </Link>
  )
}