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
  className?: string;
}

interface ContentProps {
  data: IData | undefined;
  isFetching?: boolean;
  isLoading?: boolean;
}

function Catalog ({ children, className }: CatalogProps) {
  return <div className={classNames(styles.catalog, className)}>{children}</div>
}
namespace Catalog {
  export const Container = ({children, className}: CatalogProps) => {
    return <div className={classNames('container wrapper', styles.container, className)}>{children}</div>
  }

  export const Heading = ({children}: PropsWithChildren<{}>) => {
    return <Title className={styles.title}>{children}</Title>
  }

  export const Subtitle = ({children}: PropsWithChildren<{}>) => {
    return (
      <Title className={styles.subtitle} variant='h2'>{children}</Title>
    )
  }

  export const Nav = () => {

    const items = [
      {txt: 'Все списки', href: FILMS_ROUTE},
      {txt: 'Все фильмы', href: All_FILMS_ROUTE},
      {txt: 'Все сериалы', href: All_FILMS_ROUTE},
    ]

    return (
      <ul className={classNames('list-reset', styles.nav)}>
        {items.map(el => (
          <li key={el.txt} className={styles.navItem}>
            <Link href={el.href}>
              <a className={styles.navLink}>{el.txt}</a>
            </Link>
          </li>
        ))}
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
        {!data?.docs.length && !isFetching && <Subtitle>Ничего не найдено!</Subtitle>}
        <div className={styles.content}>
          {isLoading || isFetching ? <Loader /> :
            <>
              <Catalog.Grid data={data} />
              <Pagination pages={data?.pages} />
            </>
          }
        </div>
        <Device mobile>
          <FiltersToggle />
        </Device>
      </div>
    )
  }
}

export {Catalog}