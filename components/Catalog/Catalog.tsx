import {All_FILMS_ROUTE, FILMS_ROUTE } from "@/constants/routes";
import {PropsWithChildren, ReactNode} from 'react'
import {Device} from '../Device';
import {Filters} from '../Filters/Filters';
import {FiltersToggle} from '../FiltersToggle/FiltersToggle';
import {MovieItem} from '../MovieItem/MovieItem';
import {Pagination} from '../Pagination/Pagination';
import {Spinner, SpinnerSizes} from '../Spinner/Spinner';
import {Title} from '../Title/Title';
import {IData} from '@/types/IData';
import classNames from 'classnames';
import styles from './Catalog.module.scss'
import Link from 'next/link';

interface CatalogProps {
  children: ReactNode;
  classN?: string;
}

interface ContentProps {
  data: IData | undefined;
  isFetching?: boolean;
  isLoading?: boolean;
}

function Catalog ({ children, classN }: CatalogProps) {
  return <div className={classNames(styles.catalog, classN)}>{children}</div>
}
namespace Catalog {
  export const Container = ({children, classN}: CatalogProps) => {
    return <div className={classNames('container wrapper', styles.container, classN)}>{children}</div>
  }

  export const Heading = ({children}: PropsWithChildren<{}>) => {
    return <Title classN={styles.title}>{children}</Title>
  }

  export const Nav = () => {
    return (
      <ul className={classNames('list-reset', styles.nav)}>
        <li className={styles.navItem}>
          <Link href={FILMS_ROUTE}>
            <a className={styles.navLink}>Все списки</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={All_FILMS_ROUTE}>
            <a className={styles.navLink}>Все фильмы</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={All_FILMS_ROUTE}>
            <a className={styles.navLink}>Все сериалы</a>
          </Link>
        </li>
      </ul>
    )
  }

  export const Desc = ({children}: PropsWithChildren<{}>) => {
    return <p className={styles.desc}>{children}</p>
  }

  export const Loader = () => {
    return (
      <div className={styles.spinner}>
        <Spinner variant={SpinnerSizes.medium}  />
      </div>
    )
  }

  export const Grid = ({data}: ContentProps) => {
    return (
      <div className={styles.grid}>
        {data?.docs?.map(el => (
          <MovieItem key={el.id} item={el} />
        ))}
      </div>
    )
  }

  export const Body = ({data, isLoading, isFetching}: ContentProps) => {
    return (
      <div className={styles.body}>
        <Filters />
        {!data?.docs.length && !isFetching && <Title classN={styles.subtitle} variant='h2'>Ничего не найдено!</Title>}
        <div className={styles.content}>
          {isLoading || isFetching
            ? <Loader /> :
            <>
              <Catalog.Grid data={data} />
              <Pagination pages={data?.pages} />
            </>
          }
          <Device mobile>
            <FiltersToggle />
          </Device>
        </div>
      </div>
    )
  }
}

export {Catalog}