import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";
import {SignUp} from "@/components/screens/SignUp/SignUp";
import {NextPage} from "next";

const RegisterPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <SignUp />
            </main>
            <Footer />
        </>
    );
};

export default RegisterPage;