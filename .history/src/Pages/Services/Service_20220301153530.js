import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { img, place, price, distance} = props.service;
    return (
        <Col>
        <Card className='service-card'>
        <Card.Img variant="top" src={img} />
        <Card.Body className='place-name'>
          <Card.Title><h3>{place}</h3></Card.Title>
          <Card.Text>
           <b>Distance: {distance}</b>
           <br />
          <b>Total Cost: {price}$</b> 
          </Card.Text>
          <div className='Service'>
          <Card.Text>
        <h5>Read More</h5>
          </Card.Text>
          <Card.Text>
         <button>Booking</button>
          </Card.Text>
          </div>
          

        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;