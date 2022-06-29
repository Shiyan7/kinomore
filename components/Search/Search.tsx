import {ChangeEvent, FormEvent, useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {useRouter} from 'next/router'
import {useActions} from '@/hooks/useActions'
import {TextField} from '@/components/TextField/TextField'
import {ButtonBase} from '@/components/ButtonBase/ButtonBase'
import styles from './Search.module.scss'

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
            <TextField
                className={styles.search}
                type="search"
                value={value}
                onChange={handleChange}
                placeholder='Поиск...'
            />
            <ButtonBase
                ripple={true}
                className={styles.searchBtn}
                disabled={!value.length}
                onClick={submitForm}
            >
                <FiSearch />
            </ButtonBase>
        </form>
    )
}