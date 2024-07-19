import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar className="bg-info
         ">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-film pe-3" />
         Media player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
