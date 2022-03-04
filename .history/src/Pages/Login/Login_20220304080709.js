import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div >
            <Card className='' style={{ width: '18rem', padding:'20px',  margin:'auto' }}>
 
 <Card.Body>
 <Form.Control type="text" placeholder="Your Name" /><br/>
 <Form.Control type="text" placeholder="Your Email" /><br/>
 <br/>
  <Link to="/home"><Button onClick={signInWithGoogle} variant="primary">Google Sign In</Button></Link> 
 </Card.Body>
</Card>
            
        </div>
    );
};

export default Login;