import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useService from '../../Hooks/useService';
import './Service.css';

const Service = () => {
    const {id, img, place, price, desc, distance} =useService()
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
          <div className='Service'>
          <Card.Text>
        <h5>Read More</h5>
          </Card.Text>
          <Card.Text>
         <Nav.Link as={Link} to={`/services/${id}`} ><button>Booking</button></Nav.Link>
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;