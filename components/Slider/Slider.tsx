import { ChangeEvent, FC, useState } from "react"
import { Input } from "@/components/Input/Input";
import { IFilter } from "@/types/IFilter";
import Nouislider from "nouislider-react"
import styles from './Slider.module.scss'

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  start: IFilter;
  setValue: ({}: IFilter) => void;
}

export const Slider: FC<SliderProps> = ({ min, max, start, step, setValue}) => {

  const {minValue, maxValue} = start;
  const [sliderHandle, setSliderHandle] = useState({minValue, maxValue});
  const {minValue: leftHandle, maxValue: rightHandle} = sliderHandle

  const handleSlider = () => setValue({minValue: leftHandle, maxValue: rightHandle})

  const handleSliderChange = (sliderVal: number[]) => {
    handleSlider();
    setSliderHandle({minValue: sliderVal[0], maxValue: sliderVal[1]})
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setSliderHandle({...sliderHandle, [name]: value});
    handleSlider();
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <Input
          classN={styles.input}
          name="minValue"
          type="number"
          placeholder={min?.toString()}
          value={leftHandle}
          onChange={handleChange}
          min={min}
          max={max}
        />
        <Input
          classN={styles.input}
          name="maxValue"
          type="number"
          placeholder={max?.toString()}
          value={rightHandle}
          onChange={handleChange}
          min={min}
          max={max}
        />
      </div>
      <Nouislider
        onChange={handleSliderChange}
        range={{ min: min, max: max }}
        animate={false}
        start={[leftHandle, rightHandle]}
        step={step}
        connect
        format={{
          from: function(value) {
            return Math.ceil(Number(value))
          },
          to: function(value) {
            return Math.ceil(Number(value))
          }
        }}
      />
    </div>
  )
}
