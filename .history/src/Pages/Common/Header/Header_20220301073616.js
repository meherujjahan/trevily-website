import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return ( <
        div >
        
        <Navbar>
        <Container>
          <Navbar.Brand href="#home"><h1>Tevily</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="header-item justify-content-end ">
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