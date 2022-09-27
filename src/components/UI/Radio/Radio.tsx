import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ className, label, ...props }, ref) => {
	return (
		<label className={classNames(styles.radio, className)}>
			<input ref={ref} className={styles.input} type="radio" {...props} />
			<span className={styles.switch}></span>
			<span className={styles.caption}>{label}</span>
		</label>
	);
});

Radio.displayName = 'Radio';
