import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    variant?: 'dark';
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({className, variant, value, onChange, ...props}) => {
  return (
    <input
        className={classNames(
          'input-reset',
          styles.input,
          variant === 'dark' && styles.dark,
          className
        )}
        value={value}
        onChange={onChange}
        {...props}
    />
  )
}