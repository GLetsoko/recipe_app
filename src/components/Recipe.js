import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'
const Recipe = ({recipes}) => {
    const {label, image, ingredients} = recipes;
    return<React.Fragment>
        <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src={image} />
            <Card.Body className="card-body">
                <Card.Title>{label}</Card.Title>
                <ol>            
                {
                    ingredients.map((ingredient,index) =>(
                    <li key={index}>{ingredient.text}</li>
                ))
                }
             </ol> 
            </Card.Body>
        </Card>
    </React.Fragment>
}

export default Recipe;