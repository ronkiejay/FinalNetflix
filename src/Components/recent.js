import React from 'react'
import {Card} from "react-bootstrap";


const Recent = (props) => {
    return (
        <div className="col-xm">
            <Card style={{width:"1em"}}>
                <Card.Img className="image" variant="top" src={`../img/movies/${props.image}`}  alt={`${props.title}`}/> 
                {/* <Card.Img variant="top" src={`../img/movies/adam.jpg`} alt=""/> */}
            </Card>
        </div>
    )
}

export default Recent
