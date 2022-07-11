import {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {FiX, FiSearch} from 'react-icons/fi';
import {useRouter} from 'next/router';
import {useActions} from '@/hooks/useActions';
import {TextField} from '@/components/TextField/TextField';
import {ButtonBase} from '@/components/ButtonBase/ButtonBase';
import {useOnClickOutside} from 'usehooks-ts';
import {useDebounce} from '@/hooks/useDebounce';
import {SearchList} from './components/SearchList/SearchList';
import styles from './Search.module.scss';
import classNames from 'classnames';

export const Search = () => {
    
    const {setSearch} = useActions()
    const [value, setValue] = useState<string>('')
    const [visible, setVisible] = useState<boolean>(false)
    const ref = useRef<HTMLFormElement>(null)
    const router = useRouter();
    const {debouncedValue, setDebouncedValue} = useDebounce(value, 300);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        setSearch(value)
        router.push(`/search/${value}`)
    }

    useEffect(() => {
        setVisible(false)
        setValue('')
    }, [router])

    const handleClearInput = () => {
        setValue('')
        setVisible(false)
        setDebouncedValue('')
    }

    useOnClickOutside(ref, () => setVisible(false))

    const isActive = debouncedValue && visible;

    return (
        <form onSubmit={submitForm} ref={ref} onClick={() => setVisible(true)} action="#" className={styles.form}>
            <TextField
                className={styles.search}
                variant='dark'
                type="search"
                value={value}
                onChange={handleChange}
                placeholder='Поиск...'
            />
            <ButtonBase
                ripple
                type='button'
                className={classNames(styles.closeBtn, value && styles.active)}
                onClick={handleClearInput}
            >
                <FiX />
            </ButtonBase>
            <ButtonBase
                ripple
                className={styles.searchBtn}
                disabled={!value.length}
                onClick={submitForm}
            >
                <FiSearch />
            </ButtonBase>
            {isActive && <SearchList value={debouncedValue} />}
        </form>
    )
}