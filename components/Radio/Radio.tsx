import { memo } from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import classNames from 'classnames'

interface RadioProps {
    checked?: boolean;
    label?: string;
    classN?: string;
    name: string;
    value: string;
    changeHandler: ActionCreatorWithPayload<string>
}

export const Radio = memo<RadioProps>(({checked = false, classN, changeHandler, label, name, value}) => {

    const handleChange = () => changeHandler(value)

    return (
        <label className={classNames('g-radio', classN)}>
            <input
                className="input-reset g-radio__input"
                type="radio"
                name={name}
                value={value}
                defaultChecked={checked}
                onChange={handleChange}
            />
            <span className="g-radio__switch"></span>
            <span className="g-radio__caption">{label}</span>
        </label>
    )
})

Radio.displayName = 'Radio'