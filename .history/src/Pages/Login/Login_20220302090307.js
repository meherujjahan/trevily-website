import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div >
            <Card className='' style={{ width: '18rem', padding:'20px',  margin:'auto' }}>
 
 <Card.Body>
 <Form.Control type="text" placeholder="Your Name" /><br/>
 <Form.Control type="text" placeholder="Your Email" /><br/>
 <br/>
   <Button variant="primary">Google Sign In</Button>
 </Card.Body>
</Card>
            
        </div>
    );
};

export default Login;