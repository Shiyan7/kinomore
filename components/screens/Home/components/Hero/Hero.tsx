import classNames from 'classnames'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import styles from './Hero.module.scss'
import { useRef } from 'react'
import { useEffect } from 'react'

export const Hero = () => {

  const videoRef = useRef<HTMLVideoElement>(null)
  const trailerUrl = require('../../../../../public/trailer.mp4')

  useEffect(() => {
    videoRef.current?.play()
  }, [])

  return (
    <section className={styles.section}>
      <h1 className='visually-hidden'>Kinomore — бесплатные фильмы и сериалы</h1>
      <video
        ref={videoRef}
        className={styles.video}
        src={trailerUrl}
        playsInline
        muted
        autoPlay
        loop
      >
      </video>
      <div className={classNames('container', styles.container)}>
        <div className={styles.content}>
        <h2 className={classNames('g-title', styles.title)}>Доктор Стрэндж: В&nbsp;мультивселенной безумия</h2>
        <p className={styles.desc}>Продолжение магических приключений Доктора Стрэнджа в новых мистических мирах и в противостоянии с новыми врагами.</p>
        <Link href='/film/1219909'>
          <a className={classNames('g-btn', styles.link)}>
            Подробнее
            <FiArrowRight />
          </a>
        </Link>
        </div>
      </div>
    </section>
  )
}
