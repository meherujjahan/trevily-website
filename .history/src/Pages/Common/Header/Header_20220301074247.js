import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return ( <
        div >
        
        <Navbar
        expand="lg"
      variant="dark"
      sticky="top"
      className="bg-dark">
        <Container className='header'>
          <Navbar.Brand href="#home"><h1>Tevily</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" justify-content-end ">
            <Navbar.Text className='header-item'>
              <a href="#login">Home</a>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
              <a href="#login">Services</a>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
              <a href="#login">About Us</a>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
              <a href="#login">Contract Us</a>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
              <a href="#login">Footer</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        



      </div>
    );
};

export default Header;