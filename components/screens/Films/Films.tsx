import { BEST_FILMS_ROUTE, WAR_FILMS_ROUTE, COMEDY_FILMS_ROUTE, HORROR_FILMS_ROUTE } from "@/constants/routes";
import Link from "next/link"

export const Films = () => {
  return (
    <ul className="list-reset movie-list">
      <li className="movie-list__item">
        <Link href={BEST_FILMS_ROUTE}>
          <a className="movie-item">  
            <span className="movie-item__poster">Лучшие</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">Лучшие фильмы</h2>
              <p className="movie-item__desc">250 фильмов</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href={COMEDY_FILMS_ROUTE}>
          <a className="movie-item">
            <span className="movie-item__poster">Комедии</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">Лучшие коммедии</h2>
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
              <h2 className="movie-item__title">Лучшие военные фильмы</h2>
              <p className="movie-item__desc">250 военных фильмов</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href={HORROR_FILMS_ROUTE}>
          <a className="movie-item">
            <span className="movie-item__poster">Ужасы</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">Лучших фильмы ужасов</h2>
              <p className="movie-item__desc">250 фильмов ужасов</p>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  )
}