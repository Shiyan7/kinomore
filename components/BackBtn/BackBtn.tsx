import { useRouter } from 'next/router'
import { ButtonHTMLAttributes, FC, memo } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
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
            className={classNames('btn-reset g-back', className)}
            {...props}
        >
            <FiArrowLeft />
            Назад
        </button>
    )
})

BackBtn.displayName = 'BackBtn'