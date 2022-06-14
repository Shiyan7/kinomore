import classNames from 'classnames'
import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input: FC<InputProps> = ({className,...props}) => {
  return (
    <input
        className={classNames('input-reset', 'g-input', className)}
        {...props}
    />
  )
}
