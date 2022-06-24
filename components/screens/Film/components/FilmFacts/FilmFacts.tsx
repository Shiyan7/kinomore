import {Title} from "@/components/Title/Title"
import {FC, memo} from "react"
import {IMovieFacts} from "@/types/IMovie"
import classNames from "classnames"
import styles from './FilmFacts.module.scss'

interface FilmFactsProps {
    facts: IMovieFacts[] | undefined;
}

export const FilmFacts = memo<FilmFactsProps>(({facts}) => {
    return (
        <>
            <Title variant="h2" className={styles.title}>Знаете ли вы, что…</Title>
            <ul className={classNames('list-reset', styles.facts)}>
                {facts?.map(el => (
                    <li key={el.value} className={styles.item} dangerouslySetInnerHTML={{__html: el.value}} />
                ))}
            </ul>
        </>
    )
})

FilmFacts.displayName = 'FilmFacts'