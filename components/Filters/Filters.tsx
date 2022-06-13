import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Filter} from "@/components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {Radio} from "@/components/Radio/Radio";
import styles from './Filters.module.scss'
import classNames from "classnames";
import { Button } from "../Button/Button";

export const Filters = () => {

    const {setFilterRatings, setFiterYears, setSortByRelease} = useActions();
    const {filters} = useTypedSelector(state => state.filtersReducer);
    const {openedFilters} = useTypedSelector(state => state.toggleReducer);

    return (
        <div className={classNames(styles.filters, openedFilters && styles.opened)}>
            <div className={styles.content}>
                <Filter name="Рейтинг фильмов">
                    <Slider
                        min={1}
                        max={10}
                        start={filters.rating}
                        setValue={setFilterRatings}
                        step={1}
                    />
                </Filter>
                {/* <Filter name="Года производства">
                    <Slider
                        min={1990}
                        max={getCurrentYear()}
                        startMin={year.minYear}
                        startMax={year.maxYear}
                        setMin={setYearMin}
                        setMax={setYearMax}
                    />
                </Filter> */}
                <Filter name="Год выхода">
                    <Radio
                        label='Сначала новые'
                        name="sortByYear"
                        value='-1'
                        checked
                        changeHandler={setSortByRelease}
                    />
                    <Radio
                        label='Сначала старые'
                        name="sortByYear"
                        value='1'
                        changeHandler={setSortByRelease}
                    />
                </Filter>
                <div className={styles.btns}>
                    <Button classN={styles.btn}>Применить</Button>
                    <Button classN={styles.btn} variant='stroke'>Сбросить</Button>
                </div>
            </div>
        </div>
    )
}
