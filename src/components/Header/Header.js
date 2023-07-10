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
          <Nav className="ms-auto gap-4 fs-4">
            <Link to="/home" title='dashboard'><i class="fa-solid fa-house"></i></Link>
            <Link to="/signup" title='signUp'><i className="fa-solid fa-user-plus"></i></Link>
            <Link to="/signin" title='signIn'><i className="fa-solid fa-right-to-bracket"></i></Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
