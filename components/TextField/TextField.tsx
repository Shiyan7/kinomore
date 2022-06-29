import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './TextField.module.scss'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({className, value, onChange, ...props}) => {
  return (
    <input
        className={classNames(
          'input-reset',
          styles.textField,
          className
        )}
        value={value}
        onChange={onChange}
        {...props}
    />
  )
}