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
          <Card.Title><h3 className='place-name' >Place Name: {place}</h3></Card.Title>
          <Card.Text>
           <b>Distance: {distance}</b>
           <br />
          <b>Total Cost:{price}$</b> 
          </Card.Text>
          <Card.Text>
           
          </Card.Text>

        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;