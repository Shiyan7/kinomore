import { IPerson } from "@/types/IPerson"
import { FC } from "react"
import Image from "next/image"
import styles from './PersonItem.module.scss'
import Link from "next/link";

interface PersonItemProps {
    item: IPerson;
}

export const PersonItem: FC<PersonItemProps> = ({item}) => {

    const {name, photo, id} = item

    return (
        <div className={styles.item}>
            <Link href={`/name/${id}`}>
                <a className={styles.image}>
                    <Image
                        layout='fill'
                        alt={name}
                        src={photo}
                    />
                </a>
            </Link>
            <Link href={`/name/${id}`}>
                <a className={styles.title}>{name}</a>
            </Link>
            <span className={styles.role}>{item.description}</span>
        </div>
    )
}
