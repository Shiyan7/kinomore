import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ChangeEvent, FC, useState } from "react"
import { Input } from "@/components/Input/Input";
import Nouislider from "nouislider-react"
import styles from './Slider.module.scss'
import { useActions } from "@/hooks/useActions";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  start: any;
  setValue: any;
}

export const Slider: FC<SliderProps> = ({ min, max, start, step, setValue}) => {

  const {minValue, maxValue} = start;
  console.log(start);
  
  const [inputHandle, setInputHandle] = useState({left: minValue, right: maxValue});
  const leftInputHandle = Math.ceil(Number(inputHandle.left))
  const rightInputHandle = Math.ceil(Number(inputHandle.right))
  const {setPage} = useActions()

  const handleSlider = (sliderVal: number[]) => {

    setInputHandle({
      left: sliderVal[0],
      right: sliderVal[1]
    })
  }

  const handleSliderChange = () => {
    setValue({minValue: leftInputHandle, maxValue: rightInputHandle})
    setPage(1)
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
        start={[inputHandle.left, inputHandle.right]}
        connect
      />
    </div>
  )
}
