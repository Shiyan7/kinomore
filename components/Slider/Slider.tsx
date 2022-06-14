import { FC, useState } from "react"
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

export const Slider: FC<SliderProps> = ({ min, max, start, step = 1, setValue}) => {

  const {minValue, maxValue} = start;
  const [sliderHandle, setSliderHandle] = useState([minValue, maxValue]);
  const [leftHandle, rightHandle] = sliderHandle
  
  const handleUpdate = (sliderVal: number[]) => {
    setSliderHandle([sliderVal[0], sliderVal[1]])
    setValue({minValue: leftHandle, maxValue: rightHandle})
  }

  return (
    <div className={styles.container}>
      <Nouislider
        onUpdate={handleUpdate}
        range={{ min: min, max: max }}
        animate={false}
        start={[leftHandle, rightHandle]}
        step={step}
        connect
        tooltips
        format={{
          from: function(value) {
            return Math.ceil(Number(value))
          },
          to: function(value) {
            return Math.ceil(value)
          }
        }}
      />
    </div>
  )
}
