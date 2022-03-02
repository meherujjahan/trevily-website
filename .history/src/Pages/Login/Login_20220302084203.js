import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

const Login = () => {
    return (
        <div>
            <Header></Header>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
              <Button>Google Sign In</Button>

            <Footer></Footer>
        </div>
    );
};

export default Login;