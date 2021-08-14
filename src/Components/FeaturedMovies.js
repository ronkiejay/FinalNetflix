import React from 'react'
import EachCard from './Card'
import FeaturedMovieContext from "../context/FeaturedMovieContext";
import {useContext} from "react";
import FeaMovie from "./feaMovie"
import movieContext from '../context/moviesContext';


const FeaturedMovies = () => {
    
    //const {featuredMovies} = useContext(FeaturedMovieContext);
    const {movies} = useContext(movieContext);

    const featuredSceneMovies = movies.filter(function (movie) {
        return (movie.isFeatured === true) & (movie.category === "movie")
    });
    return (
        <div className="container">
            <div className="row1">
                <div className="list-header">
                    <h5>Featured Movies</h5>
                </div>
                <div className="movieCont">
                    {featuredSceneMovies.map((movie) => (
                        <FeaMovie 
                            key={movie.id}
                            id={movie.id}
                            // title={movie.title}
                            // description={movie.description}
                            // sellingPrice={movie.sellingPrice}
                            // category={movie.category}
                            image={movie.image}
                            //alt={`${movie.title}`}
                            // rentingPrice={movie.rentingPrice}
                            // isFeatured={movie.isFeatured}
                        />
                    ))}
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovies
