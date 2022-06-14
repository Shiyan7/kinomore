import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({className}) => {
  return (
    <Link href='/'>
      <a className={classNames('g-logo', className)}>
        <Image
          layout="fill"
          src='/logo.svg'
          alt="Kinomore"
        />
      </a>
    </Link>
  )
}