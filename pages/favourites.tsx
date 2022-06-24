import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Favourites } from "@/components/screens/Favourites/Favourites";
import { NextPage } from "next";

const FavouritesPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Favourites />
            </main>
            <Footer />
        </>
    );
};

export default FavouritesPage;