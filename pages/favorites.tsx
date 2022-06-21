import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";

const FavoritesPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                Избранное
            </main>
            <Footer />
        </>
    );
};

export default FavoritesPage;