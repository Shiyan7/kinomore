
import {useActions} from "@/hooks/useActions";
import {Title} from "@/components/Title/Title";
import {Filter} from "@/components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {MovieItem} from "@/components/MovieItem/MovieItem";
import {Pagination} from "@/components/Pagination/Pagination";
import {BEST_FILMS_ROUTE, FILMS_ROUTE } from "@/constants/routes"
import {useGetHorrorFilmsQuery} from "@/services/KinopoiskService"
import Link from "next/link"
import { getCurrentYear } from "@/helpers/getCurrentYear/getCurrentYear";

export const HorrorFilms = () => {

  const {setRatingMin, setRatingMax, setYearMin, setYearMax, setPage} = useActions();
  const {year, rating} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data} = useGetHorrorFilmsQuery({
    page: page,
    minRating: rating?.minRating,
    maxRating: rating?.maxRating,
    minYear: year.minYear,
    maxYear: year.maxYear
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
        <Title classN="catalog__title">250 лучших фильмов ужасов</Title>
        <p className="catalog__desc">Рейтинг составлен по результатам голосования сайта IMDb.</p>
        <div className="catalog__body">
          <div className="filters catalog__filters">
            <div className="filters__content">
              <Filter name="Рейтинг фильмов">
                <Slider
                  min={1}
                  max={10}
                  startMin={rating.minRating}
                  startMax={rating.maxRating}
                  setMin={setRatingMin}
                  setMax={setRatingMax}
                  setPage={setPage}
                  step={1}
                />
              </Filter>
              <Filter name="Года производства">
                <Slider
                  min={1990}
                  max={getCurrentYear()}
                  startMin={year.minYear}
                  startMax={year.maxYear}
                  setMin={setYearMin}
                  setMax={setYearMax}
                  setPage={setPage}
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
            {data && !condition && <Pagination page={page} pages={data.pages} setPage={setPage} />}
          </div>
        </div>
      </div>
    </section>
  )
}