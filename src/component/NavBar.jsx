import React from 'react';
import './style/NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  return (
    <div className='navbar'>
    <Navbar expand="lg" className='nav-cont'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
          <Nav className="me-auto">
            <Nav.Link href="#skills" className='nav'>Skills</Nav.Link>
            <Nav.Link href="#exp" className='nav'>Experiences</Nav.Link>
            <Nav.Link href="#about" className='home-nav'>Home</Nav.Link>
            <Nav.Link href="#serv" className='nav'>Services</Nav.Link>
            <Nav.Link href="#contact" className='nav'>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar
