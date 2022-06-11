import { ActionCreator, ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit'
import classNames from 'classnames'
import React from 'react'
import { FC } from 'react'

interface RadioProps {
    checked?: boolean;
    txt?: string;
    classN?: string;
    name: string;
    value: string;
    changeHandler: ActionCreatorWithPayload<string>
}

export const Radio: FC<RadioProps> = ({checked = false, classN, changeHandler, txt, name, value}) => {

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
            <span className="g-radio__caption">{txt}</span>
        </label>
    )
}
