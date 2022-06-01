import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export const BackBtn = () => {

    return (
        <Link href='/'>
            <a className='btn-reset g-back'>
                <FiArrowLeft />
                На главную
            </a>
        </Link>
    )
}
