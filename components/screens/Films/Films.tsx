import Link from "next/link"
import { Textfit } from 'react-textfit';

export const Films = () => {
  return (
    <ul className="list-reset movie-list">
      <li className="movie-list__item">
        <Link href='#'>
          <a className="movie-item">  
            <Textfit
              className="movie-item__poster"
              mode='single'
            >Фильмы</Textfit>
            <div className="movie-item__text">
              <h2 className="movie-item__title">250 лучших фильмов</h2>
              <p className="movie-item__desc">250 фильмов</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href='#'>
          <a className="movie-item">
            <Textfit
              className="movie-item__poster"
              mode='single'
            >Комедии</Textfit>
            <div className="movie-item__text">
              <h2 className="movie-item__title">250 лучших коммедий</h2>
              <p className="movie-item__desc">250 коммедий</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href='#'>
          <a className="movie-item">
            <Textfit
              className="movie-item__poster"
              mode='single'
            >Военные</Textfit>
            <div className="movie-item__text">
              <h2 className="movie-item__title">250 лучших военных фильмов</h2>
              <p className="movie-item__desc">250 военных фильмов</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href='#'>
          <a className="movie-item">
            <Textfit
              className="movie-item__poster"
              mode='single'
            >Документальные</Textfit>
            <div className="movie-item__text">
              <h2 className="movie-item__title">250 лучших документальных фильмов</h2>
              <p className="movie-item__desc">250 документальных фильмов</p>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  )
}