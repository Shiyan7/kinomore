import { FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input: FC<InputProps> = ({className,...props}) => {
  return (
    <input
        className={classNames('input-reset', styles.input, className)}
        {...props}
    />
  )
}