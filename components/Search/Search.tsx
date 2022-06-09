import {ChangeEvent, FormEvent, useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {useRouter} from 'next/router'
import {useActions} from '@/hooks/useActions'
import styles from './Search.module.scss'
import classNames from 'classnames'

export const Search = () => {
    
    const {setSearch} = useActions()
    const router = useRouter();
    const [value, setValue] = useState<string>('')
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        setSearch(value)
        setValue('')
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
            <button disabled={!value.length} onClick={submitForm} className={classNames('btn-reset', styles.searchBtn)}>
                <FiSearch />
            </button>
        </form>
    )
}