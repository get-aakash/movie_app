import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar color='none' expand="md border" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='navbar-brand'><Link to='/'>Movie App</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
