import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <Card style={{ width: '18rem' }}>
 
 <Card.Body>
 <Form.Control type="text" placeholder="Your Name" /><br/>
 <Form.Control type="text" placeholder="Your Email" /><br/>
 <br/>
   <Button variant="primary">Google Sign In</Button>
 </Card.Body>
</Card>
             
            <Footer></Footer>
        </div>
    );
};

export default Login;