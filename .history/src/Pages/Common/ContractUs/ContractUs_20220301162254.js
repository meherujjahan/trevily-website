import React from 'react';

const ContractUs = () => {
    return (
        <div>
           <div>
               <h1>Do You Need Any Help?</h1>
               <p>please, Contract Us!! we are ready to help you. Fill up this from. </p>
            </div> 
            <div>
            <Card style={{ width: '18rem' }}>
 
  <Card.Body>
  <Form.Control type="text" placeholder="Your Name" /><br/>
  <Form.Control type="text" placeholder="Your Email" />
  <Form.Control placeholder="describe your Problem" as="textarea" rows={3} />
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        </div>
    );
};

export default ContractUs;