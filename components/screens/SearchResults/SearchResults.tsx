import {Title} from "@/components/Title/Title";
import {MovieItem} from "@/components/MovieItem/MovieItem";
import {Pagination} from "@/components/Pagination/Pagination";
import {FILMS_ROUTE } from "@/constants/routes";
import {Filters} from "@/components/Filters/Filters";
import {Spinner, SpinnerSizes} from "@/components/Spinner/Spinner";
import {useGetFilmByNameQuery} from "@/services/KinopoiskService";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {FiltersToggle} from "@/components/FiltersToggle/FiltersToggle";
import {Device} from '@/components/Device';
import { useRouter } from "next/router";
import styles from './SearchResults.module.scss'
import Link from "next/link";
import classNames from "classnames";

export const SearchResults = () => {

    const {query: {id}} = useRouter()
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const {page} = useTypedSelector(state => state.paginationReducer);
    const {data, isLoading, isFetching} = useGetFilmByNameQuery({
      search: id,
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
        <div className={classNames('container wrapper catalog__container', styles.container)}>
          <Title classN="catalog__title">Результаты поиска по запросу: {id}</Title>
          <p className="catalog__desc">Для поиска хорошего кино рекомендуем&nbsp;
            <Link href={FILMS_ROUTE}>
              <a>навигатор по лучшим фильмам.</a>
            </Link>
          </p>
          <div className="catalog__body">
            <Filters />
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
