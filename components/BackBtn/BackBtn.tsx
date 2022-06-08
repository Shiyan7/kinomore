import { useRouter } from 'next/router'
import { ButtonHTMLAttributes, FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import classNames from 'classnames'

interface BackBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classN?: string
}

export const BackBtn: FC<BackBtnProps> = ({classN, ...props}) => {

    const router = useRouter()
    const handleBack = () => router.back()

    return (
        <button
            onClick={handleBack}
            className={classNames('btn-reset g-back', classN)}
            {...props}
        >
            <FiArrowLeft />
            Назад
        </button>
    )
}
