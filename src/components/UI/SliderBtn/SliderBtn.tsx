import { forwardRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase';
import styles from './SliderBtn.module.scss';

interface SliderBtnProps {
	dir: 'left' | 'right';
}

export const SliderBtn = forwardRef<HTMLButtonElement, SliderBtnProps>((props, ref) => {
	return (
		<ButtonBase ripple className={styles.btn} ref={ref}>
			{props.dir === 'left' ? <FiChevronLeft /> : <FiChevronRight />}
		</ButtonBase>
	);
});

SliderBtn.displayName = 'SliderBtn';
