import React from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import useService from '../../../Hooks/useService';

const DetailsServices = () => {
     
    const {id, img, price,place}= useService()
    return (
        <div>
            <Button>Details Service</Button>
             <div className='ContractUs d-flex justify-content-around'>
          
           <div className='ContractUs-Text'>
           <Col>
        <Card className='service-card'>
        <Card.Img className="serviceImg" variant="top" src={img} />
        <Card.Body className='place-name'>
          <Card.Title><h3>{place}</h3></Card.Title>
          <Card.Text>
          <b>Total Cost: {price}$</b> 
          </Card.Text>
        </Card.Body>
      </Card>
</Col>
            </div> 
            <div className='ContractUs-form'>
            <Card style={{ width: '18rem' }}>
 
  <Card.Body>
  <Form.Control type="text" placeholder="Your Name" /><br/>
  <Form.Control type="text" placeholder="Your Email" /><br/>
  <Form.Control placeholder="describe your Problem" as="textarea" rows={3} /><br/>
    <Button variant="primary">Place Your Order</Button>
  </Card.Body>
</Card>
            </div>
        </div>
        </div>
    );
};

export default DetailsServices;