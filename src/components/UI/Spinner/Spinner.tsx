import { memo } from 'react';
import classNames from 'classnames';
import styles from './Spinner.module.scss';

export enum SpinnerSizes {
	small = '32px',
	medium = '48px',
}

interface SpinnerProps {
	size?: SpinnerSizes;
	variant?: 'dark';
}

export const Spinner = memo<SpinnerProps>(({ size = SpinnerSizes.small, variant }) => {
	return (
		<svg
			className={classNames(styles.spinner, variant === 'dark' && styles.dark)}
			height={size}
			width={size}
			viewBox="0 0 16 16"
			fill="none"
		>
			<circle
				cx="8"
				cy="8"
				r="7"
				stroke="currentColor"
				strokeOpacity="0.25"
				strokeWidth="3"
				vectorEffect="non-scaling-stroke"
			/>
			<path
				d="M15 8a7.002 7.002 0 00-7-7"
				stroke="var(--color-primary)"
				strokeWidth="3"
				strokeLinecap="round"
				vectorEffect="non-scaling-stroke"
			/>
		</svg>
	);
});

Spinner.displayName = 'Spinner';
