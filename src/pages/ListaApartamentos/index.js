import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import TabelaApartamentos from '../../components/TabelaApartamentos';
import Header from '../../components/Header';
import SlidesImagens from '../../components/Carousel';
import api from '../../services/api';


function ListaApartamentos() {

    const { sigla } = useParams();
    const [predio, setPredio] = useState({});

    let history = useHistory();

         //chamadas para api para verificar validade da sigla e pegar dados do prédio
         useEffect(() => {
            api
            .get(`/predios/${sigla}`)
            .then((response) => {
              setPredio(response.data[0]);
            })
            .catch((error) => {
            alert("Sigla do prédio informada não existe");
            history.push(`/`)
            });
            }, [sigla]);


    return (
        <><Header />
        <SlidesImagens />
        <article className="boxTitulo">
      <h1 className="titulo">Apartamentos no prédio {predio.nome} </h1>
      </article>
        <Container fluid="md">
          <TabelaApartamentos />
        </Container>

        <Container fluid="sm">
        <div className="d-grid gap-2 mt-3">
<Button className="botao" size="lg" onClick={() =>  history.push(`../cadastra-apartamento/${sigla}`)}>
          Cadastrar Novo Apartamento no prédio {predio.nome}
        </Button>
        </div>
        <div className="d-grid gap-2 mt-3">
<Button className="botaoCancel" size="lg" onClick={() =>  history.push(`/`)}>
          Voltar para home
        </Button>
        </div>
        </Container>
        
        </>

    )

}

export default ListaApartamentos;