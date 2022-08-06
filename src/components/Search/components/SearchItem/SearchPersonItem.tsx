import {FC} from "react";
import Link from "next/link";
import styles from './SearchItem.module.scss'
import Image from "next/image";
import {IPerson} from "@/types/IPerson";

interface SearchItemProps {
    item: IPerson
}

export const SearchPersonItem: FC<SearchItemProps> = ({item}) => {
  	const {name, id, enName, photo} = item;

    return (
		<Link href={`/name/${id}`}>
			<a className={styles.container}>
				<div className={styles.left}>
						<div className={styles.imageContainer}>
							<Image
								unoptimized
								layout='fill'
								src={photo}
								alt={`photo of ${enName}`}
							/>
						</div>
					<div className={styles.text}>
						<span className={styles.title}>{name ? name : enName}</span>
					</div>
				</div>
			</a>
		</Link>
    )
}