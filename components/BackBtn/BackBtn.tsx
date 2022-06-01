import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'

export const BackBtn = () => {

    const router = useRouter()

    const handleBack = () => router.back()

    return (
        <button onClick={handleBack} className='btn-reset g-back'>
            <FiArrowLeft />
            Назад
        </button>
    )
}
