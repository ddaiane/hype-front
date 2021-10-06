import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { CgTrash } from "react-icons/cg";

import api from '../../services/api';


function TabelaApartamentos() {

    const [apartamentos, setApartamentos] = useState([]);
    const [changes = false, setChanges] = useState(); //controla mudanças na pagina pra carregar novamente

    let history = useHistory();
    const { sigla } = useParams();
    
    //deleta apartamento
    function deletaApartamento(sigla, codigo) {
          var confirmou = window.confirm(`Você tem certeza que deseja deletar o apartamento ${codigo} do predio ${sigla}?`);
          if(confirmou){
          api
            .delete(`/apartamentos/${sigla}/${codigo}`)
            .then((response) => {
                setChanges(true);
                alert(`O apartamento ${response.data.codigo} foi deletado do predio ${response.data.predio}`);
            })
            .catch((error) => {
                alert(`Prédio não pode ser deletado. \nMotivo: ${error.response.data.message}`);
            })}
    }


    //chamadas para api
    useEffect(() => {
      api
      .get(`/apartamentos/${sigla}`)
      .then((response) => {
        setApartamentos(response.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar apartamentos");
        history.push(`/`)
      });
      setChanges(false);
      }, [changes]);


    return (
        <>
      
        <Table bordered responsive="sm" id="tabela" className="my-5">
  <thead>
    <tr id="tableHead">
      <th>#</th>
      <th>Código</th>
      <th>Quartos</th>      
      <th>Banheiros</th>
      <th>Suítes</th>      
      <th>Área</th>
      <th>Deletar</th>
    </tr>
  </thead>
  <tbody id="tableBody">
{apartamentos.map(function(apartamento, i, array) {
    return (      
    <tr className="item">
        <td>{i + 1} </td>
        <td>{apartamento.codigo} </td>
        <td>{apartamento.quartos}</td>
        <td>{apartamento.banheiros}</td>
        <td>{apartamento.suites}</td>
        <td>{apartamento.area_total} m²</td>
        <td className="clicavel icone" onClick={() => deletaApartamento(apartamento.predio, apartamento.codigo)}><CgTrash /></td>
    </tr>)    
})
} 
</tbody>
</Table>
</>

    )

}

export default TabelaApartamentos;