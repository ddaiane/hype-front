import React from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './styles.css';



function Header() {

  
    let history = useHistory();
  

    return (
        <Navbar collapseOnSelect expand="md" variant="dark" className="nav mx-auto">
        <Container>
          <Navbar.Brand className="clicavel" onClick={() =>  history.push(`/`)}>
            <img
              src="https://hypeempreendimentos.com.br/img/icons/icon2.png"
              height="55"
              className="d-inline-block align-top"
              alt="logo Hype Empreendimentos"
            />
          </Navbar.Brand>
          <Button className="botao" onClick={() =>  history.push(`/cadastra-predio/`)}>
          Novo prédio
        </Button>
        </Container>
        </Navbar>
    )
}


export default Header;

