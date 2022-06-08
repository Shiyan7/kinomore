import { useGetBestFilmsQuery } from "../../../../../services/KinopoiskService"
import { Title } from "../../../../Title/Title";
import { Filter } from "../../../../Filter/Filter"
import { Slider } from "../../../../Slider/Slider";
import { MovieItem } from "../../../../MovieItem/MovieItem";
import { BEST_FILMS_ROUTE, FILMS_ROUTE } from "../../../../../constants/routes"
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import Link from "next/link"
import { useActions } from "../../../../../hooks/useActions";

export const BestFilms = () => {

  const {bestFilmsRating} = useTypedSelector(state => state.ratingReducer)
  const {bestFilmsYear} = useTypedSelector(state => state.yearReducer)
  const {setBestFilmsRatingMin, setBestFilmsRatingMax, setBestFilmsYearMin, setBestFilmsYearMax} = useActions()
  const {data} = useGetBestFilmsQuery({
    page: 0,
    minRating: bestFilmsRating?.minRating,
    maxRating: bestFilmsRating?.maxRating,
    minYear: bestFilmsYear.minYear,
    maxYear: bestFilmsYear.maxYear
  })

  return (
    <section className="catalog">
      <div className="container wrapper catalog__container">
        <div className="catalog-top">
          <Link href={FILMS_ROUTE}>
            <a className='catalog-top__link'>Все списки</a>
          </Link>
          <div className="catalog-top__right">
            <Link href={BEST_FILMS_ROUTE}>
              <a className='catalog-top__link'>Топ 250 фильмов</a>
            </Link>
            <Link href={BEST_FILMS_ROUTE}>
              <a className='catalog-top__link'>Топ 250 сериалов</a>
            </Link>
          </div>
        </div>
        <Title classN="catalog__title">250 лучших фильмов</Title>
        <p className="catalog__desc">Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.</p>
        <div className="catalog__body">
          <div className="filters">
            <div className="filters__content">
              <Filter name="Рейтинг кинопоиска">
                <Slider
                  min={1}
                  max={10}
                  startMin={bestFilmsRating.minRating}
                  startMax={bestFilmsRating.maxRating}
                  setMin={setBestFilmsRatingMin}
                  setMax={setBestFilmsRatingMax}
                  step={1}
                />
              </Filter>
              <Filter name="Года производства">
                <Slider
                  min={1990}
                  max={2022}
                  startMin={bestFilmsYear.minYear}
                  startMax={bestFilmsYear.maxYear}
                  setMin={setBestFilmsYearMin}
                  setMax={setBestFilmsYearMax}
                />
              </Filter>
            </div>
          </div>
          <div className="catalog__content">
            <div className='catalog__grid'>
              {data?.docs?.map(el => (
                <MovieItem key={el.id} item={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}