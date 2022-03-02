import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './ContractUs.css';

const ContractUs = () => {
    return (
        <div className='ContractUs d-flex justify-content-around'>
           <div className='ContractUs-Text'>
               <h1>Do You Need Any Help?</h1>
               <p>please, Contract Us!! we are ready to help you. Fill up this from. </p>
               <br />
               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque corporis ad voluptas,<br/> inventore aspernatur odit id harum suscipit libero magni rerum quibusdam corrupti illo amet<br/> quasi, quis praesentium esse!</span>
            </div> 
            <div className='ContractUs-form'>
            <Card style={{ width: '18rem' }}>
 
  <Card.Body>
  <Form.Control type="text" placeholder="Your Name" /><br/>
  <Form.Control type="text" placeholder="Your Email" /><br/>
  <Form.Control placeholder="describe your Problem" as="textarea" rows={3} />
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        </div>
    );
};

export default ContractUs;