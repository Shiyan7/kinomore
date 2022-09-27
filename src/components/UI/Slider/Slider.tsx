import { ChangeEvent, FC, useRef } from 'react';
import { SliderThumb } from './components/SliderThumb/SliderThumb';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { TextField } from '../TextField/TextField';
import { Range } from 'react-range';
import { SliderTrack } from './components/SliderTrack/SliderTrack';
import styles from './Slider.module.scss';

interface SliderProps {
	min: number;
	max: number;
	values: number[];
	step?: number;
	onChange: (values: number[]) => void;
}

export const Slider: FC<SliderProps> = ({ values, onChange, step, min, max }) => {
	const initialValueRef = useRef<number[]>(values);

	const sanitizeValues = (value: number) => {
		if (value > max) {
			return max;
		}

		return value;
	};

	const handleRenderTrack: FC<IRenderTrackParams> = ({ props, children }) => {
		return (
			<SliderTrack min={min} max={max} values={values} props={props}>
				{children}
			</SliderTrack>
		);
	};

	const handleRenderThumb: FC<IRenderThumbParams> = ({ props, value, index }) => {
		return (
			<SliderThumb
				key={index}
				props={props}
				value={value}
				initialValue={initialValueRef.current?.[index]}
			/>
		);
	};

	return (
		<div data-testid="slider" className={styles.container}>
			<div className={styles.inputs}>
				<TextField
					type="number"
					label="От"
					min={min}
					max={max}
					className={styles.input}
					value={values[0]}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						const sanitizedValue = sanitizeValues(parseInt(e?.target.value || String(min)));
						onChange([sanitizedValue, values[1]]);
					}}
				/>
				<TextField
					type="number"
					label="До"
					min={min}
					max={max}
					className={styles.input}
					value={values[1]}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						const sanitizedValue = sanitizeValues(parseInt(e?.target.value || String(max)));
						onChange([values[0], sanitizedValue]);
					}}
				/>
			</div>
			<Range
				step={step}
				min={min}
				max={max}
				values={values}
				onChange={onChange}
				renderThumb={handleRenderThumb}
				renderTrack={handleRenderTrack}
			/>
		</div>
	);
};
