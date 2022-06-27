import {Button} from '@/components/Button/Button'
import {RoutesEnum} from '@/constants/routes'
import classNames from 'classnames'
import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <section className={styles.section}>
      <div className={classNames('container', styles.container)}>
        <h1 className={styles.title}>404. Страница не найдена</h1>
        <p className={styles.desc}>Возможно, она была перемещена, или вы просто неверно указали адрес страницы.</p>
        <Button href={RoutesEnum.Home} className={styles.link}>Вернуться на главную</Button>
      </div>
    </section>
  )
}