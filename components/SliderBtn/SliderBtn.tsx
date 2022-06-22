import { forwardRef, PropsWithChildren } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import styles from './SliderBtn.module.scss'
import classNames from "classnames"

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
        <button className={classNames('btn-reset', styles.btn)} ref={ref}>
            {props.dir === 'left' ? <FiChevronLeft /> : <FiChevronRight />}  
        </button>
    )
})

SliderBtn.displayName = 'SliderBtn'