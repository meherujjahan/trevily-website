import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {id, img, place, desc} = props.service;
    return (
        <Col className='service'>
        <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{place}</Card.Title>
          <Card.Text>
           {desc}
          </Card.Text>
        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;