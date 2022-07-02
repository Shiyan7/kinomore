import {Title} from "@/components/Title/Title"
import {FC, memo} from "react"
import classNames from "classnames"
import styles from './Facts.module.scss'
import { IFact } from "@/types/IFact";

interface FilmFactsProps {
    facts: IFact[] | undefined;
}

export const Facts: FC<FilmFactsProps> = (({facts}) => {
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