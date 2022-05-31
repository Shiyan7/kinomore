import classNames from 'classnames'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { useGetPopularFilmQuery } from '../../../../../services/KinopoiskService'
import styles from './Hero.module.scss'
import LinesEllipsis from 'react-lines-ellipsis'
import { useRef } from 'react'
import { useEffect } from 'react'
const trailerUrl = require('../../../../../public/trailer.mp4')

export const Hero = () => {

  const {data, isLoading, isError} = useGetPopularFilmQuery('')

  const {shortDescription, name, description, id} = {...data}

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play()
  }, [])

  const HeroContent = () => (
    <>
      <h2 className={classNames('g-title', styles.title)}>{name}</h2>
      <LinesEllipsis
        text={shortDescription ? shortDescription : description}
        className={styles.desc}
        maxLine={5}   
      />
      <Link href={`/film/${id}`}>
        <a className={classNames('g-btn', styles.link)}>
          Подробнее
          <FiArrowRight />
        </a>
      </Link>
    </>
  )

  return (
    <section className={styles.section}>
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
          {!isLoading && !isError && <HeroContent />}
        </div>
      </div>
    </section>
  )
}
