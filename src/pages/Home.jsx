import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

// importando APIs do .env
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]) //gerenciando estado dos filmes

    const getTopRatedMovies = async (url) => {

        //retornando os obj 
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results);
    }

    useEffect(() => {

        // enviando os melhoes filmes da API
        const topRetedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRetedUrl);
    }, [])

    return (
        <div className="container">
            <h2 className="title">The Best Movies:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home