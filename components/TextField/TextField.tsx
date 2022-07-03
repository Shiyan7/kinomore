import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './TextField.module.scss'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    variant?: 'dark';
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({className, value, variant, label, onChange, ...props}) => {
  return (
    <>
      {label ? (
        <label className={classNames(styles.label, className)}>
          <span className={styles.caption}>{label}</span>
          <input
            className={classNames(
              styles.textField,
              variant === "dark" && styles.dark,
            )}
            value={value}
            onChange={onChange}
            {...props}
          />
        </label>
      ) : (
        <input
          className={classNames(
            styles.textField,
            variant === "dark" && styles.dark,
            className
          )}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </>
  );
}