import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import classNames from 'classnames';

interface PaginationProps {
  page: number;
  pages: number;
  setPage: ActionCreatorWithPayload<number>;
  classN?: string;
}

export const Pagination: FC<PaginationProps> = ({page, pages, setPage, classN}) => {
  
  const array = Array.from({length: pages}, (_,idx) => idx + 1)

  if(array.length > 5) array.length = 5

  const handleBack = () => setPage(page - 1)
  const handleForward = () => setPage(page + 1)
  const handleSetPage = (page: number) => setPage(page)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  return (
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
          <button onClick={() => handleSetPage(el)} className={classNames('btn-reset g-pagination__btn', page === el && 'g-pagination__btn--current')}>
            {el}
          </button>
        </li>
      ))}
      <li className='g-pagination__item'>
        <button
          onClick={handleForward}
          className={classNames('btn-reset g-pagination__btn g-pagination__link--next', page === 5 && 'g-pagination__btn--disabled')}
        >
          <FiChevronRight />
        </button>
      </li>
    </ul>
  )
}