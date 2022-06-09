import classNames from 'classnames'
import styles from './NotFound.module.scss'
import { Button } from '@/components/Button/Button'
import { HOME_ROUTE } from '@/constants/routes'
import { Title } from '@/components/Title/Title'

export const NotFound = () => {
  return (
    <section className={styles.section}>
        <div className={classNames('container', styles.container)}>
            <Title classN={styles.title}>404. Страница не найдена</Title>
            <p className={styles.desc}>Возможно, она была перемещена, или вы просто неверно указали адрес страницы.</p>
            <Button href={HOME_ROUTE} classN={styles.link}>Вернуться на главную</Button>
        </div>
    </section>
  )
}
