import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FiSliders } from 'react-icons/fi';
import { useLockedBody } from 'usehooks-ts';
import { Button } from '@/UI/Button/Button';
import styles from './FiltersToggle.module.scss';

export const FiltersToggle = () => {
	const { openedFilters } = useTypedSelector((state) => state.toggleReducer);
	const { toggleFilters } = useActions();

	useLockedBody(openedFilters);

	const handleToggle = () => {
		toggleFilters(!openedFilters);
	};

	return (
		<Button variant="stroke" startIcon={<FiSliders />} className={styles.btn} onClick={handleToggle}>
			Фильтры
		</Button>
	);
};
