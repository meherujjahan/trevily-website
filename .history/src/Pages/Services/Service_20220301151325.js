import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { img, place, price, distance} = props.service;
    return (
        <Col>
        <Card className='service-card'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{place}</Card.Title>
          <Card.Text>
           {distance}
           <br />
           Total Cost:{price}$
          </Card.Text>
          <Card.Text>
           
          </Card.Text>

        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;