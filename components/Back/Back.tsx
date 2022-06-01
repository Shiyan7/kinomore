import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

export const Back = () => {
    return (
        <Link href="/">
            <a className='g-back'>
                <FiArrowLeft />
                На главную
            </a>
        </Link>
    )
}
