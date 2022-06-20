import { ChangeEvent, FC, useState } from "react"
import { IFilter } from "@/types/IFilter";
import styles from './Slider.module.scss'
import { Input } from "@/components/Input/Input";
import { Range, getTrackBackground } from "react-range";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  start: IFilter;
  setValue: ({}: IFilter) => void;
}

export const Slider: FC<SliderProps> = ({ min, max, start, step = 1, setValue}) => {

  const {minValue, maxValue} = start;
  const [sliderHandle, setSliderHandle] = useState({minValue, maxValue});
  const {minValue: leftHandle, maxValue: rightHandle} = sliderHandle

  const handleSlider = (values: number[]) => {
    setSliderHandle({minValue: values[0], maxValue: values[1]})
    setValue({minValue: values[0], maxValue: values[1]})
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    const startKey = Object.keys(start)[Number(name)]
    const sliderKey = Object.keys(sliderHandle)[Number(name)]
    setSliderHandle({...sliderHandle, [sliderKey]: value})
    setValue({...start, [startKey]: value})
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <Input
          className={styles.input}
          type="number"
          name="0"
          placeholder={min.toString()}
          min={min}
          max={rightHandle}
          value={leftHandle}
          onChange={handleChange}
        />
        <Input
          className={styles.input}
          type="number"
          name="1"
          min={leftHandle}
          max={max}
          value={rightHandle}
          onChange={handleChange}
          placeholder={max.toString()}
        />
      </div>
      <Range
        values={[leftHandle, rightHandle]}
        step={step}
        min={min}
        max={max}
        onChange={handleSlider}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              display: "flex"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "4px",
                width: "100%",
                borderRadius: "3px",
                background: getTrackBackground({
                  values: [leftHandle, rightHandle],
                  colors: ["rgba(0,0,0,.2)", "var(--color-primary)", "rgba(0,0,0,.2)"],
                  min: min,
                  max: max
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "17px",
              width: "17px",
              borderRadius: "100%",
              outline: 'none',
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid var(--color-primary)"
            }}
          />
        )}
      />
    </div>
  );
}
