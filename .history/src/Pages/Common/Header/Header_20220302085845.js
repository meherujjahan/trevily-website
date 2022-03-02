import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return ( <
        div >
        
        <Navbar className='header'>
        <Container>
          <Navbar.Brand href="#home"><h1>Trevily</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" justify-content-end ">
            <Navbar.Text className='header-item'>
            <Link to='/home'>Home</Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Link to='/services'>Services</Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Link to='/aboutUs'>About Us</Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Link to='/contractUs'>Contract us</Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
              <Link to='/login'>Login</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        



      </div>
    );
};

export default Header;