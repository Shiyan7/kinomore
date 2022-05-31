import { Hero } from "./components/Hero/Hero";
import { NewMovies } from "./components/NewMovies/NewMovies";
import { NewSeries } from "./components/NewSeries/NewSeries";

export const Home = () => {

    return (
        <>
            <Hero />
            <NewMovies />
            <NewSeries />
        </>
    )
}
