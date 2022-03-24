import { useState } from "react";
import './App.css';
import { Movie } from './types/Movie';


const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const loadMovies = () => {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setMovies(json);
            });
    }   

    return (
    <div className="container">
        <header className="header">
            <button className="btn-movies" onClick={loadMovies}>Carregar Filmes</button>
            <p>Total de filmes:{movies.length}</p>
        </header>
        <div className="movies">
            {movies.map((item, index) => (
                <div className="movie-item">
                    <img src={item.avatar} className="img-avatar"/>
                    {item.titulo}

                </div>
            ))}
        </div>    
    </div>
    );   
}

export default App;

//https://api.b7web.com.br/cinema/