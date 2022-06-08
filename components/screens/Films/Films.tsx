import Link from "next/link"
import { BEST_FILMS_ROUTE, WAR_FILMS_ROUTE } from "../../../constants/routes";

export const Films = () => {
  return (
    <ul className="list-reset movie-list">
      <li className="movie-list__item">
        <Link href={BEST_FILMS_ROUTE}>
          <a className="movie-item">  
            <span className="movie-item__poster">Лучшие</span>
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
            <span className="movie-item__poster">Комедии</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">250 лучших коммедий</h2>
              <p className="movie-item__desc">250 коммедий</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href={WAR_FILMS_ROUTE}>
          <a className="movie-item">
            <span className="movie-item__poster">Военные</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">250 лучших военных фильмов</h2>
              <p className="movie-item__desc">250 военных фильмов</p>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  )
}