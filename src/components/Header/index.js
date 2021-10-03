import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';
import ModalNovoPredio from '../ModalNovoPredio';



function Header() {

    return (
        <Navbar collapseOnSelect expand="md" variant="dark" className="nav mx-auto">
        <Container>
          <Navbar.Brand href="https://hypeempreendimentos.com.br/">
            <img
              src="https://hypeempreendimentos.com.br/img/icons/icon2.png"
              height="55"
              className="d-inline-block align-top"
              alt="logo Hype Empreendimentos"
            />
          </Navbar.Brand>
        <ModalNovoPredio />
        </Container>
        </Navbar>
    )
}


export default Header;

