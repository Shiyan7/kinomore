
import {useActions} from "@/hooks/useActions";
import {Title} from "@/components/Title/Title";
import {Filter} from "@/components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {MovieItem} from "@/components/MovieItem/MovieItem";
import {Pagination} from "@/components/Pagination/Pagination";
import {BEST_FILMS_ROUTE, FILMS_ROUTE } from "@/constants/routes"
import {useGetBestFilmsQuery} from "@/services/KinopoiskService"
import Link from "next/link"

export const BestFilms = () => {

  const {setBestFilmsRatingMin, setBestFilmsRatingMax, setBestFilmsYearMin, setBestFilmsYearMax, setBestFilmsPage} = useActions();
  const {bestFilmsRating} = useTypedSelector(state => state.ratingReducer);
  const {bestFilmsYear} = useTypedSelector(state => state.yearReducer);
  const {bestFilmsPage} = useTypedSelector(state => state.paginationReducer);
  const {data} = useGetBestFilmsQuery({
    page: bestFilmsPage,
    minRating: bestFilmsRating?.minRating,
    maxRating: bestFilmsRating?.maxRating,
    minYear: bestFilmsYear.minYear,
    maxYear: bestFilmsYear.maxYear
  });

  const condition = data?.pages === 1;

  return (
    <section className="catalog">
      <div className="container wrapper catalog__container">
        <div className="catalog-top">
          <Link href={FILMS_ROUTE}>
            <a className='catalog-top__link'>Все списки</a>
          </Link>
          <Link href={BEST_FILMS_ROUTE}>
            <a className='catalog-top__link'>Топ 250 фильмов</a>
          </Link>
          <Link href={BEST_FILMS_ROUTE}>
            <a className='catalog-top__link'>Топ 250 сериалов</a>
          </Link>
        </div>
        <Title classN="catalog__title">250 лучших фильмов</Title>
        <p className="catalog__desc">Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.</p>
        <div className="catalog__body">
          <div className="filters catalog__filters">
            <div className="filters__content">
              <Filter name="Рейтинг фильмов">
                <Slider
                  min={1}
                  max={10}
                  startMin={bestFilmsRating.minRating}
                  startMax={bestFilmsRating.maxRating}
                  setMin={setBestFilmsRatingMin}
                  setMax={setBestFilmsRatingMax}
                  setPage={setBestFilmsPage}
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
                  setPage={setBestFilmsPage}
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
            {data && !condition && <Pagination page={bestFilmsPage} pages={data.pages} setPage={setBestFilmsPage} />}
          </div>
        </div>
      </div>
    </section>
  )
}