import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../../services/api';
import './styles.css';

function FormNovoPredio() {

    let history = useHistory();

    //variaveis para json a ser enviado para API
    const [dados, setDados] = useState({"nome": null, "endereco": null, "cidade": null,
                               "estado": "PR", "sigla": null, "apartamentos": null });

     //pega os dados digitados e envia para o objeto                          
    function getDados(value) {
        setDados((prevState) => ({
            ...prevState,
            [value.target.name]: value.target.value}));
    }

    //post na api
    function postPredio() {
      if (!dados.nome || !dados.endereco || !dados.cidade || !dados.estado || !dados.sigla || !dados.apartamentos) {
        alert("Todos campos são obrigatórios!")
      } 
      else {
        api
            .post("/predios/", dados)
            .then((res) => {
                alert(`Prédio ${res.data[0].nome} em ${res.data[0].cidade}-${res.data[0].estado} criado com sucesso!`);
                history.push(`/`);
            })
            .catch((erro) => {
                console.log(erro);
            })}
    }


    return (
        <>
        <div className="boxForm mx-auto">
           
        <Form>
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
    <Form.Group className="mb-3" controlId="formPredioEstado">
    <Form.Label>Estado</Form.Label>
    <Form.Select name="estado" onChange={ getDados }>
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
  <div className="d-grid gap-2 mt-3">
<Button className="botao" size="lg" onClick={postPredio}>
          Cadastrar Novo Prédio
        </Button>
        </div>
</Form>

        <div className="d-grid gap-2 mt-3">
<Button className="botao" size="lg" onClick={() =>  history.push(`/`)}>
          Cancelar e voltar para home
        </Button>
        </div>
</div>
        </>
    )

}

export default FormNovoPredio;

