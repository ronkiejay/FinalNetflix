import React from 'react'
import { Card } from 'react-bootstrap'

const FeaShows = (props) => {
    return (
        <div className="col-xm">
            <Card style={{width:"1em"}}>
                <Card.Img className="image" variant="top" src={`../img/movies/${props.image}`}  alt={`${props.title}`}/> 
                
            </Card>
        </div>
    )
}

export default FeaShows
