import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NextPage } from "next";

const FavoritesPage: NextPage = () => {
    return (
        <div>
            <Header />
            Избранное
            <Footer />
        </div>
    );
};

export default FavoritesPage;