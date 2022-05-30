import classNames from 'classnames'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
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
      <Link href='#'>
        <a className={classNames('g-btn', styles.link)}>
          Подробнее
          <FiArrowRight />
        </a>
      </Link>
    </>
  )

  return (
    <section style={{backgroundImage: `url(${backdrop?.url})`}} className={styles.section}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.content}>
          {!isLoading && !isError && <HeroContent />}
        </div>
      </div>
    </section>
  )
}
