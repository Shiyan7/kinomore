import {useRouter} from 'next/router'
import {ButtonHTMLAttributes, memo} from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import styles from './BackBtn.module.scss'
import classNames from 'classnames'

interface BackBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const BackBtn = memo<BackBtnProps>(({className, ...props}) => {

    const router = useRouter()
    const handleBack = () => router.back()

    return (
        <button
            onClick={handleBack}
            className={classNames('btn-reset', styles.back, className)}
            {...props}
        >
            <FiChevronLeft />
            Назад
        </button>
    )
})

BackBtn.displayName = 'BackBtn'