import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';
import styles from './Filter.module.scss'

interface FilterProps {
    name: string;
    children: ReactNode
}

export const Filter: FC<FilterProps> = ({name, children}) => {
  
    const [open, setOpen] = useState<boolean>(true);

    const handleOpen = () => setOpen(!open);

    return (
        <div className={classNames(styles.filter, open && styles.filterActive)}>
            <button
                className={classNames('btn-reset', styles.filterControl)}
                aria-label={open ? 'Закрыть фильтр' : 'Открыть фильтр'}
                aria-expanded={open}
                onClick={handleOpen}
            >
                {name}
                <FiChevronDown />
            </button>
            <div className={styles.filterContent} aria-hidden={open}>
                {children}
            </div>
        </div>
    )
}
