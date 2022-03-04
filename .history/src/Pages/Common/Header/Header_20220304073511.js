import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../assests/logo/aviation_logo-22.jpg';
import useAuth from '../../../Context/useAuth';
import './Header.css';

const Header = () => {
  const {users, logOut} = useAuth()
    return ( <
        div >
        <Navbar className='header'>
        <Container>
          <Navbar.Brand href="#home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
          <Navbar.Brand href="#home"><h1 style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"55px" }}>Trevily</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" justify-content-end ">
            <Navbar.Text className='header-item'>
            <Nav.Link style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"20px" }} as={HashLink} to='/home#home'>Home</Nav.Link>
            </Navbar.Text>
            <Navbar.Text className='header-item'>
            <Nav.Link style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"20px" }} as={HashLink} to='/services#services'>Services</Nav.Link>
            </Navbar.Text>
            {
              users?.email ? 
             <>
             <Navbar.Text className='header-item'>
             <Nav.Link style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"20px" }} as={HashLink} to='/myOrder#myOrder'>My Order</Nav.Link>
             </Navbar.Text>
             <Navbar.Text className='header-item'>
             <Nav.Link style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"20px" }} as={HashLink} to='/manageOrder#manageOrder'>Manage Order</Nav.Link>
             </Navbar.Text>
             <Navbar.Text className='header-item'>
             <Nav.Link style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"20px" }} as={HashLink} to='/addService#addService'>Add Service</Nav.Link>
             </Navbar.Text>
             <Navbar.Text className='header-item'>
             <Button onClick={logOut}>LogOut</Button>
             </Navbar.Text> 
             </>

              :
              
              <Navbar.Text className='header-item'>
            <Nav.Link style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"20px" }} as={Link} to='/login'>Login</Nav.Link>
            </Navbar.Text>
            }
            <Navbar.Text className='header-item'>
            <Nav.Link style={{ color: " rgba(247, 76, 14, 0.849)",fontSize:"20px" }} as={Link} to='/login'>{users?.displayName}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default Header;