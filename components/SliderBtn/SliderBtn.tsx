import {forwardRef, PropsWithChildren} from "react"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import {ButtonBase} from "../ButtonBase/ButtonBase"
import styles from './SliderBtn.module.scss'

interface SliderBtnProps {
    dir: 'left' | 'right'
}

export const SliderBtnContainer = ({children}: PropsWithChildren<{}>) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export const SliderBtn = forwardRef<HTMLButtonElement, SliderBtnProps>((props, ref) => {
    return (
        <ButtonBase
            ripple
            className={styles.btn}
            ref={ref}
        >
            {props.dir === 'left' ? <FiChevronLeft /> : <FiChevronRight />}
        </ButtonBase>
    )
})

SliderBtn.displayName = 'SliderBtn'