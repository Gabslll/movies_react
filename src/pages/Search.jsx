import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; //permite pegar a query string da URL e utiliza-la 
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css'

const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {

        //retornando os obj 
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results);
    }

    useEffect(() => {

        // enviando os melhoes filmes da API
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);
    }, [query])


    return (
        <div className="container">
            <h2 className="title">
                Results for: <span className="query-text">{query}</span>
                </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Search