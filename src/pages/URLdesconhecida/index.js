import React from 'react';
import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './styles.css';

function URLdesconhecida() {

    let history = useHistory();


    return (
        <>
            <div className="notFound mx-auto py-5">
            <h1 className="titulo">URL inexistente!</h1>
            </div>
            <Container fluid="md">
            <div className="d-grid gap-2 mt-5">
<Button className="botaoCancel" size="lg" onClick={() =>  history.push(`/`)}>
          Voltar para home
        </Button>
        </div>
        </Container>
        </>
    )

}

export default URLdesconhecida;