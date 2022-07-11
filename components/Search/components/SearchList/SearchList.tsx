import { ButtonBase } from "@/components/ButtonBase/ButtonBase";
import { IMovie } from "@/types/IMovie";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import { SearchItem } from "../SearchItem/SearchItem";
import styles from './SearchList.module.scss'

interface SearchListProps {
    items: IMovie[] | undefined;
}

export const SearchList: FC<SearchListProps> = ({items}) => {

    return (
        <div className={styles.wrapper}>
            {items?.length ? (
                <>
                    <ul className={classNames("list-reset", styles.list)}>
                        {items.map(item => (
                            <SearchItem key={item.id} item={item} />
                        ))}
                    </ul>
                </>
            ) : (
                <p className={styles.desc}>По вашему запросу ничего не найдено</p>
            )}
            <ButtonBase ripple className={styles.more}>Показать все</ButtonBase>
        </div>
    );
}
