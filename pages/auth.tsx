import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";

const AuthPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                Авторизация
            </main>
            <Footer />
        </>
    );
};

export default AuthPage;