import React, { ChangeEvent, FormEvent, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import styles from './Search.module.scss'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/redux'
import { setSearch, setValue } from '../../store/reducers/searchSlice'
import { useRouter } from 'next/router'

export const Search = () => {
    
    const dispatch = useDispatch()
    const router = useRouter();
    const {value, search} = useTypedSelector(state => state.searchReducer)
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue(e.target.value))
    }

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(setSearch(value))
        dispatch(setValue(''))
        router.push(`/search/${value}`)
    }

    return (
        <form onSubmit={submitForm} action="#" className={styles.form}>
            <input
                className={classNames('input-reset', styles.search)}
                type="search"
                value={value}
                onChange={handleChange}
                placeholder='Поиск...'
            />
            <button onClick={submitForm} className={classNames('btn-reset', styles.searchBtn)}>
                <FiSearch />
            </button>
        </form>
    )
}
