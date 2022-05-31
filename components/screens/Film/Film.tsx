import classNames from "classnames"
import Image from "next/image"
import { useRouter } from "next/router"
import { useGetFilmByIdQuery } from "../../../services/KinopoiskService"
import styles from './Film.module.scss'

export const Film = () => {
    const {query} = useRouter()
    
    const {data} = useGetFilmByIdQuery(query.id)

    const {name, description, shortDescription, poster} = {...data}

    return (
        <section className={styles.section}>
            <div className={classNames('container', styles.container)}>
                <div className={styles.image}>
                    <Image
                        src={`${poster?.url}`}
                        layout='fill'
                        alt={shortDescription}
                    />
                </div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}
