import { Hero } from "./components/Hero/Hero";
import { NewFilms } from "./components/NewMovies/NewFilms";
import { NewSeries } from "./components/NewMovies/NewSeries";

export const Home = () => {

    return (
        <>
            <Hero />
            <NewFilms />
            <NewSeries />
        </>
    )
}
