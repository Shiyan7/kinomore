import classNames from 'classnames'
import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    classN?: string
}

export const Input: FC<InputProps> = ({classN,...props}) => {
  return (
    <input
        className={classNames('input-reset', 'g-input', classN)}
        {...props}
    />
  )
}
