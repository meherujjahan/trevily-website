import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './ContractUs.css';

const ContractUs = () => {
    return (
      <>
       <Button className='btn mt-5 mb-5' size="lg">Contract Us</Button>
        <div className='ContractUs d-flex justify-content-around'>
          
           <div className='ContractUs-Text'>
               <h1>Do You Need Any Help?</h1>
               <p>please, Contract Us!! we are ready to help you. Fill up this from. </p>
               
               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique <br/>cumque corporis ad voluptas, inventore aspernatur odit id harum suscipit libero<br/> magni rerum quibusdam corrupti illo amet!</span>
            </div> 
            <div className='ContractUs-form'>
            <Card style={{ width: '18rem' }}>
 
  <Card.Body>
  <Form.Control type="text" placeholder="Your Name" /><br/>
  <Form.Control type="text" placeholder="Your Email" /><br/>
  <Form.Control placeholder="describe your Problem" as="textarea" rows={3} /><br/>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        </div>
        </>
    );
};

export default ContractUs;