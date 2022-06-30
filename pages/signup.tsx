import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";
import {SignUp} from "@/components/screens/Auth/components/SignUp/SignUp";
import {NextPage} from "next";

const SignUpPage: NextPage = () => {
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

export default SignUpPage;