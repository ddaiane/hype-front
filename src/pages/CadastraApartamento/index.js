import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import SlidesImagens from '../../components/Carousel';
import FormNovoApartamento from '../../components/FormNovoApartamento';
import api from '../../services/api';


function CadastraApartamento() {

    const { sigla } = useParams();
    const [predio, setPredio] = useState({});

    let history = useHistory();

         //chamadas para api para verificar validade da sigla pegar dados do prédio
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
      <h1 className="titulo">Novo apartamento no prédio {predio.nome}</h1>
      </article>
      <Container fluid="sm">
          <FormNovoApartamento />
      </Container>
</>
    )
};


export default CadastraApartamento;