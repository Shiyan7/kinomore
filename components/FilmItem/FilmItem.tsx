import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import {IMovie} from '@/types/IMovie'
import {FiStar, FiBookmark} from 'react-icons/fi'
import { convertType } from '@/helpers/convertType/convertType'
import classNames from 'classnames'
import styles from './FilmItem.module.scss'

interface FilmItemProps {
    item: IMovie
}

export const FilmItem: FC<FilmItemProps> = ({item}) => {

    return (
        <li className={styles.item}>
            <div className={styles.top}>
                <Link href={`/film/${item.id}`}>
                    <a className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            layout='fill'
                            src={item.poster.previewUrl}
                            alt={item.description}
                        />
                    </a>
                </Link>
                <span className={styles.rating}>
                    <FiStar />
                    {item.rating.imdb}
                </span>
                <button className={classNames('btn-reset', styles.favorite)}><FiBookmark /></button>
            </div>
            <Link href={`/film/${item.id}`}>
                <a className={styles.title}>{item.names[0]?.name}</a>
            </Link>
            <span className={styles.info}>{item.year}, {convertType(item.type)}</span>
        </li>
    )
}
