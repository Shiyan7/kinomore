import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Kino More</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            </Head>
            <Header />
            <main className='main'>
                {children}
            </main>
            <Footer />
            <Script src="https://kinobd.ru/js/player_.js" strategy="lazyOnload" />
        </>
    )
}