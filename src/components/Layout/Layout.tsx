import {FC, PropsWithChildren} from "react"
import {Footer} from "@/components/Footer/Footer"
import {Header} from "@/components/Header/Header"

export const Layout: FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <>
            <Header />
            <main className='main'>
                {children}
            </main>
            <Footer />
        </>
    )
}