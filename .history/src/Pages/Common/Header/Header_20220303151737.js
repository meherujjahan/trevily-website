import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Context/useAuth';
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
            <Nav.Link as={HashLink} to='/home#home'>Home</Nav.Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Nav.Link as={HashLink} to='/services#services'>Services</Nav.Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Nav.Link as={HashLink} to='/detailsService#detailsService'>Details Service</Nav.Link>
            </Navbar.Text>
            {
              users?.email ? 
             <>
             <Navbar.Text className='header-item'>
             <Nav.Link as={HashLink} to='/myOrder#myOrder'>My Order</Nav.Link>
             </Navbar.Text>
             <Navbar.Text className='header-item'>
             <Nav.Link as={HashLink} to='/manageOrder#manageOrder'>Manage Order</Nav.Link>
             </Navbar.Text>
             <Navbar.Text className='header-item'>
             <Nav.Link as={HashLink} to='/addService#addService'>Add Service</Nav.Link>
             </Navbar.Text>
             <Navbar.Text className='header-item'>
             <Button onClick={logOut}>LogOut</Button>
             </Navbar.Text> 
             </>

              :
              
              <Navbar.Text className='header-item'>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </Navbar.Text>
            }
            <Navbar.Text className='header-item'>
            <Nav.Link as={Link} to='/login'>{users?.displayName}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default Header;