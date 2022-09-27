import { FC, useEffect } from 'react';
import { FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight } from 'react-icons/fi';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

interface PaginationProps {
	setPage: (page: number) => void;
	pages: number | undefined;
	page: number;
	className?: string;
}

export const Pagination: FC<PaginationProps> = ({ page, setPage, pages, className }) => {
	const isFirstPage = page === 1;
	const isLastPage = page === pages;

	return (
		<>
			{pages !== 1 && (
				<div data-testid="pagination" className={classNames(styles.pagination, className)}>
					<ButtonBase
						data-testid="pagination-first-btn"
						onClick={() => setPage(1)}
						className={classNames(styles.btn, styles.left)}
						disabled={isFirstPage}
					>
						<FiChevronsLeft />
					</ButtonBase>
					<ButtonBase
						data-testid="pagination-prev-btn"
						onClick={() => setPage(page - 1)}
						className={styles.btn}
						disabled={isFirstPage}
					>
						<FiChevronLeft />
					</ButtonBase>
					<span data-testid="pagination-value" className={styles.value}>
						{page} / {pages}
					</span>
					<ButtonBase
						data-testid="pagination-next-btn"
						disabled={isLastPage}
						onClick={() => setPage(page + 1)}
						className={styles.btn}
					>
						<FiChevronRight />
					</ButtonBase>
					<ButtonBase
						data-testid="pagination-last-btn"
						disabled={isLastPage}
						onClick={() => setPage(Number(pages))}
						className={classNames(styles.btn, styles.right)}
					>
						<FiChevronsRight />
					</ButtonBase>
				</div>
			)}
		</>
	);
};
