import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgTrash } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";

import api from '../../services/api';
import './styles.css';



function TabelaPredios() {
    const [predios, setPredios] = useState([]);
    const [changes = false, setChanges] = useState(); //controla mudanças na pagina pra carregar novamente


    let history = useHistory();
    
    

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
                setChanges(true);
                alert(`O prédio ${response.data} foi deletado do sistema`);
            })
            .catch((error) => {
                alert(`Prédio não pode ser deletado. \nMotivo: ${error.response.data.message}`);
            })}
      }


          //chamadas para api
    useEffect(() => {
      api
      .get(`/predios`)
      .then((response) => {
        setPredios(response.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar predios");
      });
      setChanges(false);
      }, [changes]);



    return (
      <>
      
        <Table bordered responsive="sm" id="tabela">
  <thead>
    <tr id="tableHead">
      <th>#</th>
      <th>Sigla</th>
      
      <OverlayTrigger
      overlay={
        <Tooltip>
          Clique no nome do prédio para ver os apartamentos associados a ele!
        </Tooltip>
      }
    >
      <th>Nome</th>
    </OverlayTrigger>
      
      <th>Endereço</th>
      <th>Cidade</th>      
      <th>Estado</th>
      <th>Unidades</th>
      <th>Deletar</th>
      <th>Adicionar apartamento</th>

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
        <td className="clicavel icone" onClick={() => deletaPredio(predio.sigla, predio.nome)}><CgTrash /></td>
        <td className="clicavel icone" onClick={() =>  history.push(`cadastra-apartamento/${predio.sigla}`)}><CgAdd /></td>
      </tr>)    
})
} 
</tbody>
</Table>
</>
    )
};


export default TabelaPredios;