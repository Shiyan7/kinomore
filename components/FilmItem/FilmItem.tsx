import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { IFilm } from '../../types/IFilm'
import styles from './FilmItem.module.scss'
import {FiStar, FiBookmark} from 'react-icons/fi'
import classNames from 'classnames'

interface FilmItemProps {
    item: IFilm
}

export const FilmItem: FC<FilmItemProps> = ({item}) => {

    return (
        <li className={styles.item}>
            <div className={styles.poster}>
                <Link href='#'>
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
            <Link href='#'>
                <a className={styles.title}>{item.name}</a>
            </Link>
            <span className={styles.info}>{item.year}, {item.type === 'movie' ? 'фильм' : 'сериал'}</span>
        </li>
    )
}