import { All_FILMS_ROUTE, WAR_FILMS_ROUTE, COMEDY_FILMS_ROUTE, HORROR_FILMS_ROUTE } from "@/constants/routes";
import Link from "next/link"

export const Films = () => {
  return (
    <ul className="list-reset movie-list">
      <li className="movie-list__item">
        <Link href={All_FILMS_ROUTE}>
          <a className="movie-item">  
            <span className="movie-item__poster">Фильмы</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">Все фильмы</h2>
              <p className="movie-item__desc">Фильмы</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href={COMEDY_FILMS_ROUTE}>
          <a className="movie-item">
            <span className="movie-item__poster">Комедии</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">Коммедийные фильмы</h2>
              <p className="movie-item__desc">Коммедии</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href={WAR_FILMS_ROUTE}>
          <a className="movie-item">
            <span className="movie-item__poster">Военные</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">Военные фильмы</h2>
              <p className="movie-item__desc">Военные</p>
            </div>
          </a>
        </Link>
      </li>
      <li className="movie-list__item">
        <Link href={HORROR_FILMS_ROUTE}>
          <a className="movie-item">
            <span className="movie-item__poster">Ужасы</span>
            <div className="movie-item__text">
              <h2 className="movie-item__title">Фильмы ужасов</h2>
              <p className="movie-item__desc">Ужасы</p>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  )
}