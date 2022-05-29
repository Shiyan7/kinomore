import Image from "next/image";
import { FC } from "react";
import { IFilms } from "../../../types/IData";
import { FilmItem } from "../../FilmItem/FilmItem";
import { PopularFilms } from "./components/PopularFilms/PopularFilms";

interface HomeProps {
    data: IFilms | undefined
}

export const Home: FC<HomeProps> = ({data}) => {

    return (
        <div className="container">
            <PopularFilms films={data?.docs} />
        </div>
    )
}
