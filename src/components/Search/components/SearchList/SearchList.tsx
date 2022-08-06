import {FC, useEffect, useState} from "react";
import {ButtonBase} from "@/UI/ButtonBase/ButtonBase";
import {SearchMovieItem} from "src/components/Search/components/SearchItem/SearchMovieItem";
import {useGetFilmsBySearchQuery, useGetPersonsBySearchQuery} from '@/services/KinomoreService';
import {Spinner, SpinnerSizes} from "@/UI/Spinner/Spinner";
import {Button} from "@/UI/Button/Button";
import classNames from "classnames";
import styles from './SearchList.module.scss';
import {SearchPersonItem} from "@/components/Search/components/SearchItem/SearchPersonItem";

interface SearchListProps {
    value: string;
}

export const SearchList: FC<SearchListProps> = ({value}) => {

    const [type, setType] = useState<string>('1')
    const {data: movieData, isFetching: isFetchingMovies, refetch: refetchMovies} =
        useGetFilmsBySearchQuery({query: value, type, limit: 100})
    const {data: personData, isFetching: isFetchingPersons, refetch: refetchPersons} =
        useGetPersonsBySearchQuery({query: value, limit: 100})

    const {docs: movieDocs} = {...movieData}
    const {docs: personDocs} = {...personData}

    useEffect(() => {
        refetchMovies()
        refetchPersons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const handleChangeType = (type: string) => setType(type)

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.btns}>
                    <Button
                        type='button'
                        variant='sm'
                        onClick={() => handleChangeType('1')}
                        className={classNames(styles.btn, type === '1' && styles.active)}
                    >
                        Фильмы
                    </Button>
                    <Button
                        type='button'
                        variant='sm'
                        onClick={() => handleChangeType('2')}
                        className={classNames(styles.btn, type === '2' && styles.active)}
                    >
                        Сериалы
                    </Button>
                    <Button
                        type='button'
                        variant='sm'
                        onClick={() => handleChangeType('3')}
                        className={classNames(styles.btn, type === '3' && styles.active)}
                    >
                        Мультики
                    </Button>
                    <Button
                        type='button'
                        variant='sm'
                        onClick={() => handleChangeType('4')}
                        className={classNames(styles.btn, type === '4' && styles.active)}
                    >
                        Актеры
                    </Button>
                </div>
            </div>
            {
                type === '4' ?
                    (
                        personDocs?.length ? (
                            <>
                                {!isFetchingPersons ? (
                                    <ul className={classNames("list-reset", styles.list)}>
                                        {personDocs.map((item) => (
                                            <SearchPersonItem key={item.id} item={item}/>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className={styles.loader}>
                                        <Spinner variant='dark' size={SpinnerSizes.medium}/>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className={styles.desc}>По вашему запросу ничего не найдено</p>
                        )
                    ) : (
                        movieDocs?.length ? (
                            <>
                                {!isFetchingMovies ? (
                                    <ul className={classNames("list-reset", styles.list)}>
                                        {movieDocs.map((item) => (
                                            <SearchMovieItem key={item.id} item={item}/>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className={styles.loader}>
                                        <Spinner variant='dark' size={SpinnerSizes.medium}/>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className={styles.desc}>По вашему запросу ничего не найдено</p>
                        )
                    )
            }
            {type !== '4' && <ButtonBase ripple className={styles.more}>Показать все</ButtonBase>}
        </div>
    );
}