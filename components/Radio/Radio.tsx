import { memo } from 'react'
import classNames from 'classnames'

interface RadioProps {
    sort: string;
    label?: string;
    classN?: string;
    value: string;
    changeHandler: (value: string) => void
}

export const Radio = memo<RadioProps>(({sort, classN, changeHandler, label, value}) => {

    const handleChange = () => changeHandler(value)

    return (
        <label className={classNames('g-radio', classN)}>
            <input
                className="input-reset g-radio__input"
                type="radio"
                value={value}
                checked={value === sort}
                onChange={handleChange}
            />
            <span className="g-radio__switch"></span>
            <span className="g-radio__caption">{label}</span>
        </label>
    )
})

Radio.displayName = 'Radio'