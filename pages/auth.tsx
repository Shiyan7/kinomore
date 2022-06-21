import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";

const AuthPage: NextPage = () => {
    return (
        <div>
            <Header />
            Авторизация
            <Footer />
        </div>
    );
};

export default AuthPage;