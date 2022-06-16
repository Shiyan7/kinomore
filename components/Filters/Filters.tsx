import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Filter} from "@/components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {Radio} from "@/components/Radio/Radio";
import {Button} from "../Button/Button";
import {FormEvent, useState} from 'react';
import {IFilter} from '@/types/IFilter';
import {Device} from '@/components/Device';
import {Select} from '../Select/Select';
import styles from './Filters.module.scss'
import classNames from "classnames";

export const Filters = () => {

    const {setFilterRatings, setFiterYears, setSortByRelease, setFilterGenre, setPage, toggleFilters} = useActions();
    const {filters, genres} = useTypedSelector(state => state.filtersReducer);
    const {openedFilters} = useTypedSelector(state => state.toggleReducer);

    // локальные состояние для передачи в стор
    const [rating, setRating] = useState<IFilter>({minValue: 1, maxValue: 10});
    const [year, setYear] = useState<IFilter>({minValue: 1990, maxValue: 2022});
    const [sort, setSort] = useState<string>(filters.sortByRelease);
    const [genre, setGenre] = useState<string>(filters.genre)

    //условия и строки
    const ratingString = `${rating.minValue}-${rating.maxValue}`;
    const yearString = `${year.minValue}-${year.maxValue}`;
    const ratings = rating.minValue !== rating.maxValue ? ratingString : rating.minValue;
    const years = year.minValue !== year.maxValue ? yearString : year.minValue;

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

    return (
        <form onSubmit={handleApplyFilters} noValidate onClick={handleClose} className={classNames(styles.filters, openedFilters && styles.opened)}>
            <div onClick={e => e.stopPropagation()} className={styles.content}>
                <div className={styles.container}>
                    <Filter name="Рейтинг">
                        <Slider
                            min={1}
                            max={10}
                            start={rating}
                            setValue={setRating}
                            step={1}
                        />
                    </Filter>
                    <Filter name="Года производства">
                        <Slider
                            min={1970}
                            max={2022}
                            start={year}
                            setValue={setYear}
                        />
                    </Filter>
                    <Filter name="Жанры">
                        <Select options={genres} handleSelect={setGenre} />
                    </Filter>
                    <Filter name="Год выхода">
                        <div className={styles.radios}>
                            <Radio
                                className={styles.radio}
                                label='Сначала старые'
                                value='1'
                                sort={sort}
                                changeHandler={setSort}
                            />
                            <Radio
                                className={styles.radio}
                                label='Сначала новые'
                                value='-1'
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
                            <Button className={styles.btn} onClick={handleClose} variant='stroke'>Закрыть</Button>
                        </div>
                    </Device>
                </div>
            </div>
        </form>
    )
}