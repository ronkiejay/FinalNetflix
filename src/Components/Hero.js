import React, {useContext} from 'react'
import { Badge, Button, Carousel, Nav } from "react-bootstrap";
import ShowsContext from '../context/ShowsContext';
import movieContext from '../context/moviesContext';


const Hero = () => {
    const {movies} = useContext(movieContext);
    return (
        <div className="bg-dark mw-100">
            <Carousel>
                {movies.filter((movie) => {
                    if (movie.isHero === true) {
                        return movie.isHero
                    }
                    else
                    {
                        return null
                    };
                }).map((movie) => (
                    <Carousel.Item key={movie.id}>
                        <img className="heros"
                        src={`../img/movies/${movie.image}`}
                        alt={movie.title} />

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Hero
