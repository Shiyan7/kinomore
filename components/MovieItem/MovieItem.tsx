import { FC } from 'react'
import { FiBookmark } from 'react-icons/fi'
import { IFilm } from '@/types/IFilm'
import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MovieItem.module.scss'

interface MovieItemProps {
    item: IFilm
}

export const MovieItem: FC<MovieItemProps> = ({item}) => {

    const {poster, description, names, year, movieLength, rating, shortDescription} = item;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link href={`/film/${item.id}`}>
                    <a className={styles.imageContainer}>
                        <Image
                            layout='fill'
                            src={poster.previewUrl}
                            alt={description}
                        />
                    </a>
                </Link>
                <div className={styles.text}>
                    <Link href={`/film/${item.id}`}>
                        <a className={styles.title}>{names[0].name}</a>
                    </Link>
                    <span className={styles.info}>{year}{movieLength && `, ${movieLength} мин.`}</span>
                    <p className={styles.desc}>{shortDescription ? shortDescription : description}</p>
                </div>
            </div>
            <div className={styles.right}>
                <span className={styles.rating}>
                    {rating.imdb}
                </span>
                <Button
                    variant='stroke'
                    classN={styles.btn}
                >
                    <FiBookmark />
                    Буду смотреть
                </Button>
            </div>
        </div>
    )
}
