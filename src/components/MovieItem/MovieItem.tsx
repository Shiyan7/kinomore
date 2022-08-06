import {FC} from 'react';
import {MovieFavorite} from '@/UI/MovieFavorite/index';
import {IMovie} from '@/types/IMovie';
import {useFavourites} from '@/hooks/useFavourite';
import {Rating} from '@/components/Rating/Rating';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MovieItem.module.scss';

interface MovieItemProps {
    item: IMovie
}

export const MovieItem: FC<MovieItemProps> = ({ item }) => {

    const {poster, description, name, enName, year, movieLength, rating, shortDescription, id} = item;

    const { favourites } = useFavourites();

    const isFavourite = favourites.includes(id)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link href={`/film/${id}`}>
                    <a className={styles.imageContainer}>
                        <Image
                            unoptimized
                            layout='fill'
                            src={poster.previewUrl}
                            alt={description}
                        />
                    </a>
                </Link>
                <div className={styles.text}>
                    <Link href={`/film/${id}`}>
                        <a className={styles.title}>{name ? name : enName}</a>
                    </Link>
                    <span className={styles.info}>{year}{movieLength && `, ${movieLength} мин.`}</span>
                    <Link href={`/film/${id}`}>
                        <a className={styles.desc}>{shortDescription ? shortDescription : description}</a>
                    </Link>
                </div>
            </div>
            <div className={styles.right}>
                <Rating className={styles.rating} rating={rating} />
                <MovieFavorite
                    id={id}
                    variant='text'
                    isFavourite={isFavourite}
                />
            </div>
        </div>
    )
}
