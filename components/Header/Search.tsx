import React, { ChangeEvent, FormEvent, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import styles from './Header.module.scss'
import classNames from 'classnames'

export const Search = () => {

    
    const [search, setSearch] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitForm} action="#" className={styles.form}>
            <input
                className={classNames('input-reset', styles.search)}
                type="search"
                value={search}
                onChange={handleChange}
                placeholder='Поиск...'
            />
            <button onClick={submitForm} className={classNames('btn-reset', styles.searchBtn)}>
                <FiSearch />
            </button>
        </form>
    )
}
