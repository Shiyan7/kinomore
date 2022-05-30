import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiPlay, FiBookmark } from 'react-icons/fi'
import { useGetPopularFilmQuery } from '../../../../../services/KinopoiskService'
import styles from './Hero.module.scss'
import LinesEllipsis from 'react-lines-ellipsis'

export const Hero = () => {

  const {data, isLoading, isError} = useGetPopularFilmQuery('')

  const {backdrop, shortDescription, name, description} = {...data}

  console.log(data);

  const HeroContent = () => (
    <>
      <h2 className={classNames('g-title', styles.title)}>{name}</h2>
      <LinesEllipsis
        text={shortDescription ? shortDescription : description}
        className={styles.desc}
        maxLine={5}   
      />
      <div className={styles.btns}>
        <Link href=''>
          <a className={classNames('g-btn', styles.btn)}>
            <FiPlay />
            Смотреть
          </a>
        </Link>
        <Link href=''>
          <a className={classNames('g-btn g-btn--white', styles.btn)}>
            <FiBookmark />
            Добавить в избранное
          </a>
        </Link>
      </div>
    </>
  )

  return (
    <section className={styles.section}>
      {!isLoading && !isError &&
        <Image
          className={styles.image}
          src={backdrop?.url}
          layout='fill'
          alt={shortDescription}
        />
      }
      <div className={classNames('container', styles.container)}>
        <div className={styles.content}>
          {!isLoading && !isError && <HeroContent />}
        </div>
      </div>
    </section>
  )
}
