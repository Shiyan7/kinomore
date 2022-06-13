import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Filter} from "@/components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {Radio} from "@/components/Radio/Radio";
import styles from './Filters.module.scss'
import classNames from "classnames";
import { Button } from "../Button/Button";
import { useState } from 'react';
import { IFilter } from '@/types/IFilter';
import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';

export const Filters = () => {

    const {setFilterRatings, setFiterYears, setSortByRelease, setPage} = useActions();
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const {openedFilters} = useTypedSelector(state => state.toggleReducer);

    // use state
    const [rating, setRating] = useState<IFilter>(filters.rating)
    const [year, setYear] = useState<IFilter>(filters.year)
    const [sort, setSort] = useState<string>(filters.sortByRelease)

    const handleApplyForm = () => {
        setPage(1)
        setFilterRatings(rating)
        setFiterYears(year)
        setSortByRelease(sort)
    }

    const handleResetForm = () => {
        
    }

    return (
        <div className={classNames(styles.filters, openedFilters && styles.opened)}>
            <div className={styles.content}>
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
                        min={1990}
                        max={getCurrentYear()}
                        start={year}
                        setValue={setYear}
                    />
                </Filter>
                <Filter name="Год выхода">
                    <Radio
                        label='Сначала новые'
                        name="sortByYear"
                        value='-1'
                        checked
                        changeHandler={setSort}
                    />
                    <Radio
                        label='Сначала старые'
                        name="sortByYear"
                        value='1'
                        changeHandler={setSort}
                    />
                </Filter>
                <div className={styles.btns}>
                    <Button classN={styles.btn} onClick={handleApplyForm}>Применить</Button>
                    <Button classN={styles.btn} onClick={handleResetForm} variant='stroke'>Сбросить</Button>
                </div>
            </div>
        </div>
    )
}
