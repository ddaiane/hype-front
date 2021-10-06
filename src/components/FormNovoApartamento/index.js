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
        "suites": null, "area_total": null, "sigla": sigla });

    //pega os dados digitados e envia para o objeto dados                        
    function getDados(value) {
    setDados((prevState) => ({
    ...prevState,
    [value.target.name]: value.target.value}));
    }

    //post na api
    function postApartamento() {
        if (!dados.codigo || !dados.quartos || !dados.banheiros || !dados.suites || !dados.sigla || !dados.area_total) {
            alert("Todos campos são obrigatórios!")
          }
        else if(parseInt(dados.area_total) <= 1 || parseInt(dados.quartos) < 0 || parseInt(dados.suites) < 0 || parseInt(dados.banheiros) < 0) {
            alert("Valores inválidos! \n- Área total deve ser maior que 1; \n- Quartos, banheiros e suítes devem ter valores positivos.");
        }
          else {
            api
                .post("/apartamentos/", dados)
                .then((res) => {
                    alert(`Apartamento código ${res.data[0].codigo} criado com sucesso no prédio ${res.data[0].predio}!`);
                    history.push(`../apartamentos-predio/${sigla}`);
                })
                .catch((erro) => {
                    alert(`Erro no cadastro de novo apartamento.\nMotivo: ${erro.response.data.message}`);
                })}
        }



    return (
        <>
        <div className="boxForm mx-auto"> 
        <Form>        
            <Row>
                <Col xs={4}>
                <Form.Group className="mb-3 mx-auto">
                <Form.Label>Código do Apartamento</Form.Label>
                <Form.Control type="text" name="codigo" onChange={ getDados } />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                <Form.Group className="mb-3">
                <Form.Label>Quartos</Form.Label>
                <Form.Control type="number" name="quartos" onChange={ getDados } />
                </Form.Group> 
                </Col>
                <Col xs={4}>
                <Form.Group className="mb-3">
                <Form.Label>Banheiros</Form.Label>
                <Form.Control type="number" name="banheiros" onChange={ getDados } />
                </Form.Group> 
                </Col>
                <Col xs={4}>
                <Form.Group className="mb-3">
                <Form.Label>Suítes</Form.Label>
                <Form.Control type="number" name="suites" onChange={ getDados } />
                </Form.Group> 
                </Col>
            </Row>
            <Row>
            <Col xs={4}>
                <Form.Group className="mb-3 mx-auto">
                <Form.Label>Área total do apartamento</Form.Label>
                <Form.Control type="number" 
                    name="area_total" onChange={ getDados } />
                </Form.Group>
                </Col>
            </Row>
    <Form.Text muted>
    * Todos os campos são obrigatórios.
    </Form.Text>
</Form>
<div className="d-grid gap-2 mt-3">
<Button className="botao" size="lg" onClick={postApartamento}>
          Cadastrar Novo Apartamento
        </Button>
        </div>
        <div className="d-grid gap-2 mt-3">
<Button className="botaoCancel" size="lg" onClick={() =>  history.push(`/`)}>
          Cancelar e voltar para home
        </Button>
        </div>
</div>
        </>
    )
}

export default FormNovoApartamento;