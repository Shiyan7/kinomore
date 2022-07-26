import {PropsWithChildren, useEffect} from 'react'
import {MovieItem} from '@/components/MovieItem/MovieItem';
import {FiltersToggle} from './components/FiltersToggle/FiltersToggle';
import {Pagination} from '@/UI/Pagination/Pagination';
import {Spinner, SpinnerSizes} from '@/UI/Spinner/Spinner';
import {Title} from '@/UI/Title/Title';
import {IMovies} from '@/types/IMovies';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import classNames from 'classnames';
import styles from './Catalog.module.scss';

interface ContentProps {
  data: IMovies | undefined;
  isFetching?: boolean;
  isLoading?: boolean;
}

function Catalog ({ children }: PropsWithChildren<{}>) {
  return <div className={styles.catalog}>{children}</div>
}
module Catalog {
  export const Container = ({children}: PropsWithChildren<{}>) => {
    return <div className={classNames('container wrapper', styles.container)}>{children}</div>
  }

  export const Heading = ({children}: PropsWithChildren<{}>) => {
    return <Title className={styles.title}>{children}</Title>
  }

  export const Subtitle = ({children}: PropsWithChildren<{}>) => {
    return (
      <Title className={styles.subtitle} variant='h2'>{children}</Title>
    )
  }

  export const Description = ({children}: PropsWithChildren<{}>) => {
    return <p className={styles.desc}>{children}</p>
  }

  export const Loader = () => {
    return (
      <div className={styles.spinner}>
        <Spinner size={SpinnerSizes.medium}  />
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

  export const Body = ({children}: PropsWithChildren<{}>) => {
    return (
      <div className={styles.body}>
        <FiltersToggle />
        {children}
      </div>
    )
  }

  export const Content = ({data, isLoading, isFetching}: ContentProps) => {
    
    const {page} = useTypedSelector(state => state.paginationReducer)
    const {setPage} = useActions()

    useEffect(() => {
      scrollTo(0, 0)
    }, [page])

    const CatalogContent = (
      <>
        <Catalog.Grid data={data} />
        <Pagination page={page} setPage={setPage} pages={data?.pages} />
      </>
    )

    return (
      <>
        {isLoading || isFetching ? <Loader /> : (
          <div className={styles.content}>
            {!data?.docs?.length ? <Subtitle>Ничего не найдено!</Subtitle> : CatalogContent}
          </div>
        )}
      </>
    );
  }
}

export {Catalog}