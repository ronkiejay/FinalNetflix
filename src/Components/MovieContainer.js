import React,{useContext} from 'react'
import Movies from "./Movies"
import movieContext from "../context/moviesContext";


const MovieContainer = () => {

    const {movies} = useContext(movieContext);

    const allMovies = movies.filter(function (movie) {
        return  (movie.category === "movie")
    });

    return (
        <div className="container">
            <div className="row">
                <div className="list-header">
                    <h5>Movies</h5>
                </div>
                
                <div className="movieCont">
               
                    {allMovies.map((movie)=>(
                        <Movies 
                        id={movie.id} 
                        key={movie.id} 
                        image={movie.image} 
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default MovieContainer