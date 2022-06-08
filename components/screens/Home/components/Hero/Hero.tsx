import classNames from 'classnames'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import styles from './Hero.module.scss'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Button } from '../../../../Button/Button'
import { Title } from '../../../../Title/Title'

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
        <Title variant='h2' classN={styles.title}>Доктор Стрэндж: В&nbsp;мультивселенной безумия</Title>
        <p className={styles.desc}>Продолжение магических приключений Доктора Стрэнджа в новых мистических мирах и в противостоянии с новыми врагами.</p>
        <Button href='/film/1219909'>
          Подробнее
          <FiArrowRight />
        </Button>
        </div>
      </div>
    </section>
  )
}
