import {PropsWithChildren} from 'react'
import {MovieItem} from '@/components/MovieItem/MovieItem';
import {Device} from '@/components/Device';
import {FiltersToggle} from '@/components/FiltersToggle/FiltersToggle';
import {Pagination} from '@/components/Pagination/Pagination';
import {Spinner, SpinnerSizes} from '@/components/Spinner/Spinner';
import {Title} from '@/components/Title/Title';
import {IData} from '@/types/IData';
import classNames from 'classnames';
import styles from './Catalog.module.scss'
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

interface ContentProps {
  data: IData | undefined;
  isFetching?: boolean;
  isLoading?: boolean;
}

function Catalog ({ children }: PropsWithChildren<{}>) {
  return <div className={styles.catalog}>{children}</div>
}
namespace Catalog {
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

  export const Body = ({children}: PropsWithChildren<{}>) => {
    return (
      <div className={styles.body}>
        {children}
        <Device mobile>
          <FiltersToggle />
        </Device>
      </div>
    )
  }

  export const Content = ({data, isLoading, isFetching}: ContentProps) => {
    
    const {page} = useTypedSelector(state => state.paginationReducer)
    const {setPage} = useActions()

    return (
      <>
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <div className={styles.content}>
            {!data?.docs?.length ? (
              <Subtitle>Ничего не найдено!</Subtitle>
            ) : (
              <>
                <Catalog.Grid data={data} />
                <Pagination page={page} setPage={setPage} pages={data?.pages} />
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

export {Catalog}