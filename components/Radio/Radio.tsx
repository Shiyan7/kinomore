import { memo } from 'react'
import classNames from 'classnames'
import styles from './Radio.module.scss'

interface RadioProps {
    sort: string;
    label?: string;
    className?: string;
    value: string;
    changeHandler: (value: string) => void
}

export const Radio = memo<RadioProps>(({sort, className, changeHandler, label, value}) => {

    const handleChange = () => changeHandler(value)

    return (
        <label className={classNames(styles.radio, className)}>
            <input
                className={classNames('input-reset', styles.input)}
                type="radio"
                value={value}
                checked={value === sort}
                onChange={handleChange}
            />
            <span className={styles.switch}></span>
            <span className={styles.caption}>{label}</span>
        </label>
    )
})

Radio.displayName = 'Radio'