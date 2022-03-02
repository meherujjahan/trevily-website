import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const [id, img, place, desc] = props.service;
    return (
        <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{place}</Card.Title>
          <Card.Text>
           {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default Service;