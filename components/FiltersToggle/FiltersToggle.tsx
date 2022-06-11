import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import {FiFilter, FiX} from 'react-icons/fi'
import {useLockedBody} from 'usehooks-ts'
import classNames from 'classnames'
import styles from './FiltersToggle.module.scss'

export const FiltersToggle = () => {

    const {openedFilters} = useTypedSelector(state => state.toggleReducer);
    const {toggleFilters} = useActions()
    
    useLockedBody(openedFilters)

    const handleToggle = () => toggleFilters(!openedFilters)

    return (
        <button className={classNames('btn-reset', styles.btn)} onClick={handleToggle}>
            {openedFilters === false ? <FiFilter /> : <FiX />}
        </button>
    )
}