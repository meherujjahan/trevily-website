import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useService from '../../../Hooks/useService';

const DetailsServices = () => {
     
    const {id, img, price,place}= useService()
    return (
        <div>
            <Button>Details Service</Button>
             <div>
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
        </div>
    );
};

export default DetailsServices;