import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../../services/api';

function FormNovoApartamento() {
    let history = useHistory();

    const { sigla } = useParams();

    //variaveis para json a ser enviado para API
    const [dados, setDados] = useState({"codigo": null, "quartos": null, "banheiros": null,
        "suites": null, "area_total": null, "predio": sigla });

    //pega os dados digitados e envia para o objeto dados                        
    function getDados(value) {
    setDados((prevState) => ({
    ...prevState,
    [value.target.name]: value.target.value}));
    }

    //post na api
    function postApartamento() {
        api
            .post("/apartamentos/", dados)
            .then((res) => {
                alert(`Apartamento código ${res.data[0].codigo} criado com sucesso no prédio ${res.data[0].sigla}!`);
                history.push(`/`);
            })
            .catch((erro) => {
                console.log(erro);
            })
    }


    return (
        <>
        <div className="boxForm mx-auto"> 
        <Form>        
            <Row>
                <Col xs={4}>
                <Form.Group className="mb-3 mx-auto">
                <Form.Label>Código do Apartamento</Form.Label>
                <Form.Control required type="text" name="codigo" onChange={ getDados } />
                </Form.Group>
                </Col>
            </Row>


        <Form.Group className="mb-3" controlId="formPredioNome">
    <Form.Label>Nome do prédio</Form.Label>
    <Form.Control required type="text" name="nome" onChange={ getDados } />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formPredioEndereco">
    <Form.Label>Endereço</Form.Label>
    <Form.Control required type="text" name="endereco" onChange={ getDados } />
  </Form.Group>
  <Row>
    <Col xs={8}>
    <Form.Group className="mb-3" controlId="formPredioCidade">
    <Form.Label>Cidade</Form.Label>
    <Form.Control required type="text" name="cidade" onChange={ getDados }/>
  </Form.Group>    
  </Col>
    <Col>
        
    </Col>
  </Row>
  <Row>
      <Col xs={8}>
      <Form.Group className="mb-3" controlId="formPredioSigla">
    <Form.Label>Sigla</Form.Label>
    <Form.Control required type="text" name="sigla" onChange={ getDados } />
  </Form.Group>  
      </Col>
      <Col xs={4}>
      <Form.Group className="mb-3" controlId="formPredioUnidades">
    <Form.Label>Unidades</Form.Label>
    <Form.Control required type="number" name="apartamentos" onChange={ getDados } />
    </Form.Group>    
      </Col>
  </Row>
</Form>
<div className="d-grid gap-2 mt-3">
<Button className="botao" size="lg" onClick={postApartamento}>
          Cadastrar Novo Prédio
        </Button>
        </div>
        <div className="d-grid gap-2 mt-3">
<Button className="botao" size="lg" onClick={() =>  history.push(`/`)}>
          Cancelar e voltar para home
        </Button>
        </div>
</div>
        </>
    )

}

export default FormNovoApartamento;