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
          <b>Total Cost:{price}$</b> 
          </Card.Text>
          <div>
          <Card.Text>
        Read More
          </Card.Text>
          <Card.Text>
          <Button className='btn' size="lg">Services</Button>
          </Card.Text>
          </div>
          

        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;