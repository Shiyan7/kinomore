import { FC } from "react";
import { IFilms } from "../../../types/IData";
import { Hero } from "./components/Hero/Hero";
import { NewMovies } from "./components/NewMovies/NewMovies";

interface HomeProps {
    data: IFilms | undefined
}

export const Home: FC<HomeProps> = ({data}) => {

    return (
        <NewMovies films={data?.docs} />
    )
}
