import { FC, memo, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import classNames from 'classnames';

interface PaginationProps {
  pages: number | any;
  classN?: string;
}

export const Pagination = memo<PaginationProps>(({pages, classN}) => {

  const {page} = useTypedSelector(state => state.paginationReducer)
  const {setPage} = useActions()
  const array = Array.from({length: pages}, (_,idx) => idx + 1)
  const handleBack = () => setPage(page - 1)
  const handleForward = () => setPage(page + 1)
  const handleSetPage = (page: number) => setPage(page)
  const isMaxPages = pages <= 5 ? pages : 5 

  if(array.length > 5) array.length = 5

  return (
    <>
      {pages !== 1 &&
        <ul className={classNames('list-reset g-pagination', classN)}>
          <li className='g-pagination__item'>
            <button
              onClick={handleBack}
              className={classNames('btn-reset g-pagination__btn g-pagination__link--prev', page === 1 && 'g-pagination__btn--disabled')}
            >
              <FiChevronLeft />
            </button>
          </li>
          {array?.map(el => (
            <li key={el} className='g-pagination__item'>
              {page === el
              ?
                <span className={classNames('g-pagination__btn g-pagination__btn--current')}>
                  {el}
                </span>
              :
                <button onClick={() => handleSetPage(el)} className='btn-reset g-pagination__btn'>
                  {el}
                </button>
              }
            </li>
          ))}
          <li className='g-pagination__item'>
            <button
              onClick={handleForward}
              className={classNames('btn-reset g-pagination__btn g-pagination__link--next', page === isMaxPages && 'g-pagination__btn--disabled')}
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