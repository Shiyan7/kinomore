import {useEffect} from 'react';
import {useSwipeable} from 'react-swipeable';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import {Filter} from "./components/Filter/Filter"
import {Slider} from "@/components/Slider/Slider";
import {Radio} from "@/components/Radio/Radio";
import {Button} from "@/components/Button/Button";
import {Select} from '@/components/Select/Select';
import {getCurrentYear} from '@/helpers/getCurrentYear/getCurrentYear';
import {Controller, useForm} from 'react-hook-form';
import styles from './Filters.module.scss';
import classNames from "classnames";

export const Filters = () => {

    const {
      setFilterRatings,
      setFiterYears,
      setSortByRelease,
      setFilterGenre,
      setPage,
      toggleFilters,
      setSwipedValue,
      resetFilters,
    } = useActions();
    const {swipedValue, genres} = useTypedSelector(state => state.filtersReducer)
    const {openedFilters} = useTypedSelector(state => state.toggleReducer);

    const handleClose = () => {
        toggleFilters(false)
    }

    const handlers = useSwipeable({
        onSwiping: e => setSwipedValue(e.deltaY),
        onSwipedUp: () => setSwipedValue(0),
        onSwipedDown: () => handleClose(),
        trackMouse: false,
    });

    const {handleSubmit, control, register, reset} = useForm({
        defaultValues: {
            sort: '-1',
            genres: genres[0],
            rating: [1, 10],
            year: [1960, getCurrentYear()]
        }
    })

    const onSubmit = handleSubmit((data) => {
        const {sort, rating, year, genres} = data
        
        const ratingString = `${rating[0]}-${rating[1]}`;
        const yearString = `${year[0]}-${year[1]}`;
        const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
        const years = year[0] !== year[1] ? yearString : year[0];
        const genre = genres.value

        setPage(1)
        setFilterRatings(ratings)
        setFiterYears(years)
        setSortByRelease(sort)
        setFilterGenre(genre)
        handleClose()
    });

    const handleReset = () => {
        resetFilters()
        reset()
    }

    useEffect(() => {
        handleReset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <form
            action="#"
            onSubmit={onSubmit}
            noValidate
            onClick={handleClose}
            className={classNames(styles.filters, openedFilters && styles.opened)}
        >
            <div style={{transform: `translateY(${swipedValue}px)`}} onClick={e => e.stopPropagation()} className={styles.content}>
                <div {...handlers} onClick={handleClose} className={styles.top}></div>
                <div className={styles.container}>
                    <Filter name="Рейтинг">
                        <Controller
                            name="rating"
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <Slider
                                        min={1}
                                        max={10}
                                        values={value}
                                        onChange={onChange}
                                        step={1}
                                    />
                                );
                            }}
                        />
                    </Filter>
                    <Filter name="Года производства">
                        <Controller
                            name="year"
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <Slider
                                        min={1887}
                                        max={getCurrentYear()}
                                        values={value}
                                        onChange={onChange}
                                    />
                                );
                            }}
                        />
                    </Filter>
                    <Filter name="Жанры">
                        <Controller
                            name="genres"
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <Select
                                        value={value}
                                        onChange={onChange}
                                        name="genres"
                                        options={genres}
                                    />
                                );
                            }}
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