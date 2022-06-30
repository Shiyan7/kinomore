import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";
import {SignIn} from "@/components/screens/SignIn/SignIn";
import {NextPage} from "next";

const LoginPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <SignIn />
            </main>
            <Footer />
        </>
    );
};

export default LoginPage;