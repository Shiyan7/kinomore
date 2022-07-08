import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './TextField.module.scss'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    error?: boolean;
    variant?: 'dark' | 'small';
    errorMessage?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({className, value, error = false, errorMessage, variant, label, onChange, ...props}) => {
  return (
    <label className={classNames(styles.label, className)}>
      {label && <span className={styles.caption}>{label}</span>}
      <input
        data-testid="input"
        className={classNames(
          styles.textField,
          variant === 'dark' && styles.dark,
          variant === 'small' && styles.small,
          error === true && styles.error
        )}
        value={value}
        onChange={onChange}
        {...props}
      />
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </label>
  );
}