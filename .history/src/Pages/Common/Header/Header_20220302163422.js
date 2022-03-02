import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const {users, logOut} = useAuth()
    return ( <
        div >
        
        <Navbar className='header'>
        <Container>
          <Navbar.Brand href="#home"><h1>Trevily</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" justify-content-end ">
            <Navbar.Text className='header-item'>
            <Nav.Link as={Link} to='/home#home'>Home</Nav.Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Nav.Link as={Link} to='/services#services'>Services</Nav.Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Nav.Link as={Link} to='/aboutUs#aboutUs'>About Us</Nav.Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Nav.Link as={Link} to='/contractUs#contractUs'>Contract Us</Nav.Link>
            </Navbar.Text>
            {
              users?.email ? 
              <Navbar.Text className='header-item'>
              <Button onClick={logOut}>LogOut</Button>
              </Navbar.Text>
              
              :
              <Navbar.Text className='header-item'>
            <Nav.Link as={Link} to='/login#login'>Login</Nav.Link>
            </Navbar.Text>
            }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
        



      </div>
    );
};

export default Header;