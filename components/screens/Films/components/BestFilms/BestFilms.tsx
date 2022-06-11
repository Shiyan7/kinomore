
import {Title} from "@/components/Title/Title";
import {MovieItem} from "@/components/MovieItem/MovieItem";
import {Pagination} from "@/components/Pagination/Pagination";
import {BEST_FILMS_ROUTE, FILMS_ROUTE } from "@/constants/routes";
import {Filters} from "@/components/Filters/Filters";
import {Spinner, SpinnerSizes} from "@/components/Spinner/Spinner";
import {useEffect} from "react";
import {useGetBestFilmsQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {FiltersToggle} from "@/components/FiltersToggle/FiltersToggle";
import Link from "next/link";

export const BestFilms = () => {

  const {year, rating, sortByRelease} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetBestFilmsQuery({
    page: page,
    minRating: rating?.minRating,
    maxRating: rating?.maxRating,
    minYear: year.minYear,
    maxYear: year.maxYear,
    releaseYear: sortByRelease
  });

  useEffect(() => {
    scrollTo(0, 170)
  }, [page])

  const Content = () => (
    <>
      <div className='catalog__grid'>
        {data?.docs?.map(el => (
          <MovieItem key={el.id} item={el} />
        ))}
      </div>
      <Pagination pages={data?.pages} />
    </>
  )

  const Loader = () => (
    <div className="catalog__spinner">
      <Spinner variant={SpinnerSizes.medium}  />
    </div>
  )

  return (
    <section className="catalog">
      <div className="container wrapper catalog__container">
        <div className="catalog-top">
          <Link href={FILMS_ROUTE}>
            <a className='catalog-top__link'>Все списки</a>
          </Link>
          <Link href={BEST_FILMS_ROUTE}>
            <a className='catalog-top__link'>Лучшие фильмы</a>
          </Link>
          <Link href={BEST_FILMS_ROUTE}>
            <a className='catalog-top__link'>Лучшие сериалы</a>
          </Link>
        </div>
        <Title classN="catalog__title">Лучшие фильмы</Title>
        <p className="catalog__desc">Рейтинг составлен по результатам голосования на сайте IMDb.</p>
        <div className="catalog__body">
          <Filters />
          <div className="catalog__content">
            {isLoading || isFetching ? <Loader /> : <Content />}
          </div>
          <FiltersToggle />
        </div>
      </div>
    </section>
  )
}