import {FormEvent, useEffect, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Filter} from "./components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {Radio} from "@/components/Radio/Radio";
import {Button} from "@/components/Button/Button";
import {Device} from '@/components/Device';
import {Select} from '@/components/Select/Select';
import {getCurrentYear} from '@/helpers/getCurrentYear/getCurrentYear';
import styles from './Filters.module.scss';
import classNames from "classnames";
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

export const Filters = () => {

    const {setFilterRatings, setFiterYears, setSortByRelease, setFilterGenre, setPage, toggleFilters, setSwipedValue, resetFilters} = useActions();
    const {swipedValue, filters, genres} = useTypedSelector(state => state.filtersReducer)
    const {openedFilters} = useTypedSelector(state => state.toggleReducer);

    // // локальные состояние для передачи в стор
    // const [rating, setRating] = useState<number[]>([1,10]);
    // const [year, setYear] = useState<number[]>([1960, getCurrentYear()]);
    // const [sort, setSort] = useState<string>(filters.sortByRelease);
    // const [genre, setGenre] = useState<string>(filters.genre)

    // //условия и строки
    // const ratingString = `${rating[0]}-${rating[1]}`;
    // const yearString = `${year[0]}-${year[1]}`;
    // const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
    // const years = year[0] !== year[1] ? yearString : year[0];

    const handleClose = () => {
        toggleFilters(false)
    }

    /* const handleApplyFilters = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPage(1)
        setFilterRatings(ratings)
        setFiterYears(years)
        setSortByRelease(sort)
        setFilterGenre(genre)
        handleClose()
    } */

    const handleReset = () => {
        resetFilters()
        reset()
    }

    const handlers = useSwipeable({
        onSwiping: e => setSwipedValue(e.deltaY),
        onSwipedUp: () => setSwipedValue(0),
        onSwipedDown: () => handleClose(),
        trackMouse: false,
    });

    useEffect(() => {
        resetFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {handleSubmit, control, register, reset} = useForm({
        defaultValues: {
            sort: '-1',
            genres: '',
        }
    })

    const onSubmit: SubmitHandler<any> = data => console.log(data);


    return (
        <form
            action="#"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            onClick={handleClose}
            className={classNames(styles.filters, openedFilters && styles.opened)}
        >
            <div style={{transform: `translateY(${swipedValue}px)`}} onClick={e => e.stopPropagation()} className={styles.content}>
                <div {...handlers} onClick={handleClose} className={styles.top}></div>
                <div className={styles.container}>
                    {/* <Filter name="Рейтинг">
                        <Slider
                            min={1}
                            max={10}
                            values={rating}
                            onChange={setRating}
                            step={1}
                        />
                    </Filter>
                    <Filter name="Года производства">
                        <Slider
                            min={1887}
                            max={getCurrentYear()}
                            values={year}
                            onChange={setYear}
                        />
                    </Filter> */}
                    <Filter name="Жанры">
                        <Select
                            name="genres"
                            options={genres}
                            control={control}
                        />
                    </Filter>
                    <Filter name="Год выхода">
                        <div className={styles.radios}>
                            <Radio
                                className={styles.radio}
                                label='Сначала новые'
                                value='-1'
                                {...register('sort')}
                            />
                            <Radio
                                className={styles.radio}
                                label='Сначала старые'
                                value='1'
                                {...register('sort')}
                            />
                        </div>
                    </Filter>
                    <div className={styles.btns}>
                        <Button className={styles.btn}>Применить</Button>
                        <Button type='button' className={styles.btn} onClick={handleReset} variant='stroke'>Сбросить</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}