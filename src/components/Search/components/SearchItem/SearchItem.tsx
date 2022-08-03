import {IMovie} from "@/types/IMovie";
import {FC} from "react";
import {Rating} from "@/components/Rating/Rating";
import Link from "next/link";
import styles from './SearchItem.module.scss'
import Image from "next/image";
import classNames from "classnames";

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
								unoptimized
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
				<Rating className={styles.rating} rating={rating} />
			</a>
		</Link>
    )
}