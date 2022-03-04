import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, img, place, price, desc, distance} = props.service;
    return (
        <Col>
        <Card className='service-card'>
        <Card.Img className="serviceImg" variant="top" src={img} />
        <Card.Body className='place-name'>
          <Card.Title><h3>{place}</h3></Card.Title>
          <Card.Text>
          <Card.Text>
        <p>{desc}</p>
          </Card.Text>
           <b>Distance: {distance}</b>
           <br />
          <b>Total Cost: {price}$</b> 
          </Card.Text>
          <Card.Text>
         <Nav.Link as={Link} to={`/services/${_id}`} ><button>Booking</button></Nav.Link>
          </Card.Text>
         
        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;