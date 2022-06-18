import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import {IMovie} from '@/types/IMovie'
import {convertType} from '@/helpers/convertType/convertType'
import {MovieRating} from '../MovieRating/MovieRating'
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
                <MovieRating rating={item.rating} />
            </div>
            <Link href={`/film/${item.id}`}>
                <a className={styles.title}>{item.names[0]?.name}</a>
            </Link>
            <span className={styles.info}>{item.year}, {convertType(item.type)}</span>
        </li>
    )
}
