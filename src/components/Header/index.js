import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './styles.css';



function Header() {

    return (
        <Navbar collapseOnSelect expand="md" variant="dark" className="nav mx-auto">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://hypeempreendimentos.com.br/img/icons/icon2.png"
              height="58"
              className="d-inline-block align-top"
              alt="logo Hype Empreendimentos"
            />
          </Navbar.Brand>
        
        </Container>
        </Navbar>
    )
}


export default Header;

