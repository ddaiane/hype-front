import React, {useState, useEffect, useCallback} from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgTrash } from "react-icons/cg";

import api from '../../services/api';
import './styles.css';



function TabelaPredios() {
    const [predios, setPredios] = useState([]);

    //chamada para api
    const prediosRequest = useCallback(() => {
        api
        .get(`/predios`)
        .then((response) => {
          setPredios(response.data);
        })
        .catch((error) => {
          alert("Ocorreu um erro ao buscar predios");
        });
    }, []);
    

      //carrega tela de apartamentos do predio
      function abrePredio(sigla) {
          alert(sigla);
      }

      //deleta predio
      function deletaPredio(sigla, nome) {
          var confirmou = window.confirm(`Você tem certeza que deseja deletar o prédio ${nome} do sistema?`);
          if(confirmou){
          api
            .delete(`/predios/${sigla}`)
            .then((response) => {
                prediosRequest();
                alert(`O prédio ${response.data} foi deletado do sistema`);
            })
            .catch((error) => {
                alert(error.response.data.message);
            })}
      }

          //chamada inicial para api
    useEffect(() => {
        prediosRequest();
      });


    return (
        <Table bordered responsive="sm" id="tabela">
  <thead>
    <tr id="tableHead">
      <th>#</th>
      <th>Sigla</th>
      <th>Nome</th>
      <th>Endereço</th>
      <th>Cidade</th>      
      <th>Estado</th>
      <th>Unidades</th>
      <th>Deletar</th>
    </tr>
  </thead>
  <tbody id="tableBody">
{predios.map(function(predio, i, array) {
    return (      
    <tr className="item">
        <td> {i + 1} </td>
        <td className="clicavel" onClick={() => abrePredio(predio.sigla)}> {predio.sigla} </td>
        <td className="clicavel" onClick={() => abrePredio(predio.sigla)}>{predio.nome}</td>
        <td>{predio.endereco}</td>
        <td>{predio.cidade}</td>
        <td>{predio.estado}</td>
        <td>{predio.apartamentos}</td>
        <td className="clicavel" id="delete" onClick={() => deletaPredio(predio.sigla, predio.nome)}><CgTrash /></td>
      </tr>)    
})
} 
</tbody>
</Table>
    )
};


export default TabelaPredios;