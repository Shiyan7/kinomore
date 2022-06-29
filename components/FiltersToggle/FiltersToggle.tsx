import {useActions} from '@/hooks/useActions'
import {useTypedSelector} from '@/hooks/useTypedSelector'
import {FiFilter} from 'react-icons/fi'
import {useLockedBody} from 'usehooks-ts'
import {ButtonBase} from '../ButtonBase/ButtonBase'
import styles from './FiltersToggle.module.scss'

export const FiltersToggle = () => {

    const {openedFilters} = useTypedSelector(state => state.toggleReducer);
    const {toggleFilters} = useActions()
    
    useLockedBody(openedFilters)

    const handleToggle = () => toggleFilters(!openedFilters)

    return (
        <ButtonBase className={styles.btn} onClick={handleToggle}>
            <FiFilter />
        </ButtonBase>
    )
}