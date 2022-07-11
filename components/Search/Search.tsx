import {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import {useRouter} from 'next/router';
import {useActions} from '@/hooks/useActions';
import {TextField} from '@/components/TextField/TextField';
import {ButtonBase} from '@/components/ButtonBase/ButtonBase';
import {useGetFilmsBySearchQuery} from '@/services/KinomoreService';
import {useDebounce, useOnClickOutside} from 'usehooks-ts';
import styles from './Search.module.scss';
import { SearchList } from './components/SearchList/SearchList';

export const Search = () => {
    
    const {setSearch} = useActions()
    const [value, setValue] = useState<string>('')
    const [visible, setVisible] = useState<boolean>(false)
    const ref = useRef<HTMLFormElement>(null)
    const router = useRouter();
    const debouncedValue = useDebounce(value, 300);
    const {data, refetch} = useGetFilmsBySearchQuery({query: debouncedValue, limit: 20})
    
    useEffect(() => {
        refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        setSearch(value)
        router.push(`/search/${value}`)
    }

    useEffect(() => {
        setValue('')
    }, [])

    useOnClickOutside(ref, () => setVisible(false))

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
                className={styles.searchBtn}
                disabled={!value.length}
                onClick={submitForm}
            >
                <FiSearch />
            </ButtonBase>
            {debouncedValue && visible && <SearchList items={data?.docs} />}
        </form>
    )
}