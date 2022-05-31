import logoUrl from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
    return (
        <Link href='/'>
            <a className='g-logo'>
                <Image
                    layout="fill"
                    src={logoUrl}
                    alt="Kinomore"
                />
            </a>
        </Link>
    )
}
