import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Filter} from "./components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {Radio} from "@/components/Radio/Radio";
import {Button} from "../Button/Button";
import {FormEvent, useState} from 'react';
import {Device} from '@/components/Device';
import {Select} from '../Select/Select';
import {useSwipeable} from 'react-swipeable';
import {getCurrentYear} from '@/helpers/getCurrentYear/getCurrentYear';
import styles from './Filters.module.scss';
import classNames from "classnames";

export const Filters = () => {

    const {setFilterRatings, setFiterYears, setSortByRelease, setFilterGenre, setPage, toggleFilters} = useActions();
    const {filters, genres} = useTypedSelector(state => state.filtersReducer);
    const {openedFilters} = useTypedSelector(state => state.toggleReducer);

    // локальные состояние для передачи в стор
    const [rating, setRating] = useState<number[]>([1,10]);
    const [year, setYear] = useState<number[]>([1960, getCurrentYear()]);
    const [sort, setSort] = useState<string>(filters.sortByRelease);
    const [genre, setGenre] = useState<string>(filters.genre)

    //условия и строки
    const ratingString = `${rating[0]}-${rating[1]}`;
    const yearString = `${year[0]}-${year[1]}`;
    const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
    const years = year[0] !== year[1] ? yearString : year[0];

    const handleClose = () => {
        toggleFilters(false)
    }

    const handleApplyFilters = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPage(1)
        setFilterRatings(ratings)
        setFiterYears(years)
        setSortByRelease(sort)
        setFilterGenre(genre)
        handleClose()
    }

    const handlers = useSwipeable({trackMouse: false, onSwipedDown: handleClose});

    return (
        <form
            action="#"
            onSubmit={handleApplyFilters}
            noValidate
            onClick={handleClose}
            className={classNames(styles.filters, openedFilters && styles.opened)}
        >
            <div {...handlers} onClick={e => e.stopPropagation()} className={styles.content}>
                <div className={styles.container}>
                    <Filter name="Рейтинг">
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
                    </Filter>
                    <Filter name="Жанры">
                        <Select options={genres} handleSelect={setGenre} />
                    </Filter>
                    <Filter name="Год выхода">
                        <div className={styles.radios}>
                            <Radio
                                className={styles.radio}
                                label='Сначала новые'
                                value='-1'
                                sort={sort}
                                changeHandler={setSort}
                            />
                            <Radio
                                className={styles.radio}
                                label='Сначала старые'
                                value='1'
                                sort={sort}
                                changeHandler={setSort}
                            />
                        </div>
                    </Filter>
                    <Device desktop>
                        <div className={styles.btns}>
                            <Button className={styles.btn}>Применить</Button>
                        </div>
                    </Device>
                    <Device mobile>
                        <div className={styles.btns}>
                            <Button className={styles.btn}>Применить</Button>
                            <Button type='button' className={styles.btn} onClick={handleClose} variant='stroke'>Закрыть</Button>
                        </div>
                    </Device>
                </div>
            </div>
        </form>
    )
}