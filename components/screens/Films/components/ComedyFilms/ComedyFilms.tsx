import {Title} from "@/components/Title/Title";
import {MovieItem} from "@/components/MovieItem/MovieItem";
import {Pagination} from "@/components/Pagination/Pagination";
import {All_FILMS_ROUTE, FILMS_ROUTE } from "@/constants/routes";
import {Filters} from "@/components/Filters/Filters";
import {Spinner, SpinnerSizes} from "@/components/Spinner/Spinner";
import {useGetComedyFilmsQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {FiltersToggle} from "@/components/FiltersToggle/FiltersToggle";
import {Device} from '@/components/Device';
import Link from "next/link";

export const ComedyFilms = () => {

  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetComedyFilmsQuery({
    page: page,
    filters
  });

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
          <Link href={All_FILMS_ROUTE}>
            <a className='catalog-top__link'>Лучшие фильмы</a>
          </Link>
          <Link href={All_FILMS_ROUTE}>
            <a className='catalog-top__link'>Лучшие сериалы</a>
          </Link>
        </div>
        <Title classN="catalog__title">Комедии</Title>
        <p className="catalog__desc">Комедии для просмотра всей семьей.</p>
        <div className="catalog__body">
          <Filters />
          {!data?.docs.length && !isFetching && <Title classN="catalog__subtitle" variant='h2'>Ничего не найдено!</Title>}
          <div className="catalog__content">
            {isLoading || isFetching ? <Loader /> : <Content />}
          </div>
          <Device mobile>
            <FiltersToggle />
          </Device>
        </div>
      </div>
    </section>
  )
}