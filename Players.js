import React from "react";
import Card from 'react-bootstrap/Card';

function players(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img   className='image'  variant="top" src={props.url}/>

      <Card.Body>
     <Card.Title>{props.name}</Card.Title>
     <Card.Title>{props.equipe}</Card.Title>
     <Card.Title>{props.nationalite}</Card.Title>
     <Card.Title>{props.age}</Card.Title>
      </Card.Body>
    </Card>

  );
}

export default players;
