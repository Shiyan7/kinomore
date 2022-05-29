import { FC } from "react";
import { IFilms } from "../../../types/IData";
import { Hero } from "./components/Hero/Hero";
import { PopularFilms } from "./components/PopularFilms/PopularFilms";

interface HomeProps {
    data: IFilms | undefined
}

export const Home: FC<HomeProps> = ({data}) => {

    return (
        <PopularFilms films={data?.docs} />
    )
}
