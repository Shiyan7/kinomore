import {IMovie} from "@/types/IMovie";
import {FC} from "react";
import Link from "next/link";
import styles from './SearchItem.module.scss'
import Image from "next/image";

interface SearchItemProps {
    item: IMovie
}

export const SearchItem: FC<SearchItemProps> = ({item}) => {
  	const {name, id, poster, description, year, enName, movieLength, rating} = item;

    return (
		<Link href={`/film/${id}`}>
			<a className={styles.container}>
				<div className={styles.left}>
						<div className={styles.imageContainer}>
							<Image
								layout='fill'
								src={poster.previewUrl}
								alt={description}
							/>
						</div>
					<div className={styles.text}>
						<span className={styles.title}>{name ? name : enName}</span>
						<span className={styles.info}>{year}{movieLength && `, ${movieLength} мин.`}</span>
					</div>
				</div>
				<span className={styles.rating}>{rating?.kp ? rating.kp : rating?.imdb}</span>
			</a>
		</Link>
    )
}