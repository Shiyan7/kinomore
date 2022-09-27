import { FC, PropsWithChildren, useMemo } from 'react';
import { getTrackBackground } from 'react-range';
import { ITrackProps } from 'react-range/lib/types';
import styles from './SliderTrack.module.scss';

interface SliderTrack {
	props: ITrackProps;
	min: number;
	max: number;
	values: number[];
}

export const SliderTrack: FC<PropsWithChildren<SliderTrack>> = ({
	children,
	values,
	props,
	min,
	max,
}) => {
	const backgroundStyle = useMemo(
		() =>
			getTrackBackground({
				values,
				colors: ['rgba(0,0,0,.2)', 'var(--color-primary)', 'rgba(0,0,0,.2)'],
				min: min,
				max: max,
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[values]
	);

	return (
		<div ref={props.ref} className={styles.track} style={{ background: backgroundStyle }}>
			{children}
		</div>
	);
};
