import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Filter} from "@/components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {Radio} from "@/components/Radio/Radio";
import {Button} from "../Button/Button";
import {useState} from 'react';
import {IFilter} from '@/types/IFilter';
import {Device} from '@/components/Device';
import styles from './Filters.module.scss'
import classNames from "classnames";

export const Filters = () => {

    const {setFilterRatings, setFiterYears, setSortByRelease, setPage, toggleFilters} = useActions();
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const {openedFilters} = useTypedSelector(state => state.toggleReducer);

    // локальные состояние для передачи в стор
    const [rating, setRating] = useState<IFilter>({minValue: 8, maxValue: 10});
    const [year, setYear] = useState<IFilter>({minValue: 1990, maxValue: 2022});
    const [sort, setSort] = useState<string>(filters.sortByRelease);

    //условия и строки
    const ratingString = `${rating.minValue}-${rating.maxValue}`;
    const yearString = `${year.minValue}-${year.maxValue}`;
    const ratings = rating.minValue !== rating.maxValue ? ratingString : rating.minValue;
    const years = year.minValue !== year.maxValue ? yearString : year.minValue;

    const handleClose = () => {
        toggleFilters(false)
    }

    const handleApplyFilters = () => {
        setPage(1)
        setFilterRatings(ratings)
        setFiterYears(years)
        setSortByRelease(sort)
        handleClose()
    }

    return (
        <div onClick={handleClose} className={classNames(styles.filters, openedFilters && styles.opened)}>
            <div onClick={e => e.stopPropagation()} className={styles.content}>
                <Filter name="Рейтинг фильмов">
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
                <Filter name="Год выхода">
                    <Radio
                        classN={styles.radio}
                        label='Сначала старые'
                        value='1'
                        sort={sort}
                        changeHandler={setSort}
                    />
                    <Radio
                        classN={styles.radio}
                        label='Сначала новые'
                        value='-1'
                        sort={sort}
                        changeHandler={setSort}
                    />
                </Filter>
                <Device desktop>
                    <Button classN={styles.btn} onClick={handleApplyFilters}>Применить</Button>
                </Device>
                <Device mobile>
                    <div className={styles.btns}>
                        <Button classN={styles.btn} onClick={handleApplyFilters}>Применить</Button>
                        <Button classN={styles.btn} onClick={handleClose} variant='stroke'>Закрыть</Button>
                    </div>
                </Device>
            </div>
        </div>
    )
}
