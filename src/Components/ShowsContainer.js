import React, {useContext} from 'react'
import Shows from "./Shows"
import ShowsContext from "../context/ShowsContext"
import movieContext from '../context/moviesContext'

const ShowsContainer = () => {

    const {movies} = useContext(movieContext);

    const allShows = movies.filter(function (movie) {
        return  (movie.category === "show")
    });

    return (
        <div className="container">
            <div className="row">
                <div className="list-header">
                    <h5>TV Shows</h5>
                </div>
                
                <div className="movieCont">
               
                    {allShows.map((movie)=>(
                        <Shows 
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

export default ShowsContainer
