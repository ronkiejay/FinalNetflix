import React from 'react'
import FeaShows from "./feaShows"
import FeaturedShowContext from "../context/FeaturedShowContext";
import {useContext} from "react";
import movieContext from '../context/moviesContext';


const FeaturedShows = () => {

    //const {featuredShows} = useContext(FeaturedShowContext);
    const {movies} = useContext(movieContext);

    const featuredSceneShows = movies.filter(function (movie) {
        return (movie.isFeatured === true) & (movie.category === "show")
    });

    return (
        <div className="container">
            <div className="row">
                <div className="list-header">
                    <h5>Featured TV Shows </h5>
                </div>
                <div className="movieCont">
                                     
                        {featuredSceneShows.map((movie) => (
                        <FeaShows 
                            key={movie.id}
                            id={movie.id}
                            image={movie.image}
                        />
                    ))}
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default FeaturedShows
