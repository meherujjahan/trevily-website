import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    return (
        <div>
            <Button className='btn' size="lg">Services</Button>

            <Row xs={1} md={2} className="g-4">
  
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
</Row>

        </div>
    );
};

export default Services;