import { ChangeEvent, FC, SetStateAction, useState } from "react"
import { Input } from "@/components/Input/Input";
import Nouislider from "nouislider-react"
import styles from './Slider.module.scss'
import { IFilter } from "@/types/IFilter";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  start: IFilter;
  setValue: ({}: IFilter) => void;
}

export const Slider: FC<SliderProps> = ({ min, max, start, step, setValue}) => {

  const {minValue, maxValue} = start;
  const [inputHandle, setInputHandle] = useState({minValue, maxValue});
  const leftInputHandle = Math.ceil(Number(inputHandle.minValue))
  const rightInputHandle = Math.ceil(Number(inputHandle.maxValue))

  const handleSlider = (sliderVal: number[]) => {

    setInputHandle({
      minValue: sliderVal[0],
      maxValue: sliderVal[1]
    })
  }

  const handleSliderChange = () => {
    setValue({minValue: leftInputHandle, maxValue: rightInputHandle})
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputHandle({...inputHandle, [e.target.name]: e.target.value})
    handleSliderChange()
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <Input
          classN={styles.input}
          name="left"
          type="number"
          placeholder={min?.toString()}
          value={leftInputHandle}
          onChange={handleChange}
          min={min}
          max={max}
        />
        <Input
          classN={styles.input}
          name="right"
          type="number"
          placeholder={max?.toString()}
          value={rightInputHandle}
          onChange={handleChange}
          min={min}
          max={max}
        />
      </div>
      <Nouislider
        onUpdate={handleSlider}
        onChange={handleSliderChange}
        range={{ min: min, max: max }}
        animate={false}
        step={step}
        start={[inputHandle.minValue, inputHandle.maxValue]}
        connect
      />
    </div>
  )
}
