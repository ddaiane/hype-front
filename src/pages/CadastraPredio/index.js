import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import SlidesImagens from '../../components/Carousel';
import FormNovoPredio from '../../components/FormNovoPredio';
import './styles.css';



function CadastraPredio() {



    return (
        <><Header />
        <SlidesImagens />
        <article className="boxTitulo">
      <h1 className="titulo">Novo Prédio</h1>
      </article>
      <Container fluid="sm">
      <FormNovoPredio />
      </Container>
</>

    )
};


export default CadastraPredio;