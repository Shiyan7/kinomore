import { memo, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

interface PaginationProps {
  pages: number | any;
  className?: string;
}

export const Pagination = memo<PaginationProps>(({pages, className}) => {

  const {page} = useTypedSelector(state => state.paginationReducer)
  const {setPage} = useActions()
  const array = Array.from({length: pages}, (_,idx) => idx + 1)
  const handleBack = () => setPage(page - 1)
  const handleForward = () => setPage(page + 1)
  const handleSetPage = (page: number) => setPage(page)
  const isMaxPages = pages <= 5 ? pages : 5 

  if(array.length > 5) array.length = 5

  useEffect(() => {
    scrollTo(0, 0)
  }, [page])

  return (
    <>
      {pages !== 1 &&
        <ul className={classNames('list-reset', styles.pagination, className)}>
          <li className={styles.item}>
            <button
              onClick={handleBack}
              className={classNames('btn-reset', styles.btn, page === 1 && styles.disabled)}
            >
              <FiChevronLeft />
            </button>
          </li>
          {array?.map(el => (
            <li key={el} className={styles.item}>
              {page === el
              ?
                <span className={classNames(styles.btn, styles.current)}>
                  {el}
                </span>
              :
                <button onClick={() => handleSetPage(el)} className={classNames('btn-reset', styles.btn)}>
                  {el}
                </button>
              }
            </li>
          ))}
          <li className={styles.item}>
            <button
              onClick={handleForward}
              className={classNames('btn-reset', styles.btn, page === isMaxPages && styles.disabled)}
            >
              <FiChevronRight />
            </button>
          </li>
        </ul>
      }
    </>
  )
})

Pagination.displayName = 'Pagination'