import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../../services/api';
import './styles.css';

function FormNovoPredio() {


    return (
        <>
        <div className="boxForm mx-auto">
        <Form>
        <Form.Group className="mb-3" controlId="formPredioNome">
    <Form.Label>Nome do prédio</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formPredioEndereco">
    <Form.Label>Endereço</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <Row>
    <Col xs={8}>
    <Form.Group className="mb-3" controlId="formPredioCidade">
    <Form.Label>Cidade</Form.Label>
    <Form.Control type="text" />
  </Form.Group>    
  </Col>
    <Col>
    <Form.Group className="mb-3" controlId="formPredioEstado">
    <Form.Label>Estado</Form.Label>
    <Form.Select>
  <option>Selecione</option>
  <option value="AC">AC</option>
  <option value="AL">AL</option>
  <option value="AP">AP</option>
  <option value="AM">AM</option>
  <option value="BA">BA</option>
  <option value="CE">CE</option>
  <option value="DF">DF</option>
  <option value="ES">ES</option>
  <option value="GO">GO</option>
  <option value="MA">MA</option>
  <option value="MT">MT</option>
  <option value="MS">MS</option>
  <option value="MG">MG</option>
  <option value="PA">PA</option>
  <option value="PB">PB</option>
  <option value="PR">PR</option>
  <option value="PE">PE</option>
  <option value="PI">PI</option>
  <option value="RJ">RJ</option>
  <option value="RN">RN</option>
  <option value="RS">RS</option>
  <option value="RO">RO</option>
  <option value="RR">RR</option>
  <option value="SC">SC</option>
  <option value="SP">SP</option>
  <option value="SE">SE</option>
  <option value="TO">TO</option>
</Form.Select>
</Form.Group>    

    </Col>
  </Row>
</Form>
</div>
        </>
    )

}

export default FormNovoPredio;

