import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return ( <
        div >
        
        <Navbar>
        <Container>
          <Navbar.Brand href="#home"><h1>Tevily</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end "style={{py:5}}>
            <Navbar.Text className=''>
              <a href="#login">Home</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="#login">Services</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="#login">About Us</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="#login">Contract Us</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="#login">Footer</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        



      </div>
    );
};

export default Header;