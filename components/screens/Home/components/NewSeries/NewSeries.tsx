import { FC } from 'react'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import { useGetNewSeriesQuery } from '../../../../../services/KinopoiskService'
import Link from 'next/link'

export const NewSeries: FC = () => {

  const {data} = useGetNewSeriesQuery('')

  return (
    <section>
      <div className='container g-section__container'>
        <div className='g-section__top'>
          <h2 className='g-title g-section__title'>Сериалы этого года</h2>
          <Link href='/series'>
            <a href="#" className='g-btn'>Смотреть все</a>
          </Link>
        </div>
        <ul className='list-reset g-section__grid'>
          {data?.docs?.map(el => (
              <FilmItem key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </section>
  )
}
