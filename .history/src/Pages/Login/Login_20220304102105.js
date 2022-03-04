import React from 'react';
import { Button, Card, Form, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Login.css';



const Login = () => {
   
    const { signInWithGoogle } = useAuth();
    return (
        <div style={{margin:"20px"}}>
            <Card className='' style={{ width: '18rem', padding:'20px',  margin:'auto',boxShadow:"7px 7px 7px 7px rgba(240, 67, 4, 0.363)" }}>
 
 <Card.Body>
 <Form.Control type="text" placeholder="Your Name" /><br/>
 <Form.Control type="text" placeholder="Your Email" /><br/>
 <br/>
 
  <NavLink to="/home" as={Link} ><Button style={{width:"100%"}} onClick={signInWithGoogle} variant="primary"><i class="fa-brands fa-google"></i>   Sign In</Button></NavLink>
 </Card.Body>
</Card>
            
        </div>
    );
};

export default Login;