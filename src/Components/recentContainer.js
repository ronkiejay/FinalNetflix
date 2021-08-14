import React, {useContext} from 'react'
import Recent from "./recent"
import RecentMovieContext from "../context/RecentMovieContext";
import movieContext from '../context/moviesContext';


const RecentContainer = () => {
    const {movies} = useContext(movieContext);

    const recentlyAddedMovies = movies.filter(function (movie) {
        return (movie.id > 0) & (movie.id < 13)
    });

    return (
        <div className="container">
            <div className="row">
                <div className="list-header">
                    <h5>Recently Added Movies</h5>
                </div>
                
                <div className="movieCont">
               
                    {recentlyAddedMovies.map((movie)=>(
                        <Recent 
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

export default RecentContainer
