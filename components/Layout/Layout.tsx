import {PropsWithChildren} from 'react'
import Head from 'next/head'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <>
            <Head>
                <title>Kinomore</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            </Head>
            {children}
        </>
    )
}