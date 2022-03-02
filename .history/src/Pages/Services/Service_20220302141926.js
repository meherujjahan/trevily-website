import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { img, place, price, desc, distance} = props.service;
    return (
        <Col className='container-fluid'>
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
         <button>Booking</button>
          </Card.Text>
          </div>
          

        </Card.Body>
      </Card>
</Col>
    );
};

export default Service;