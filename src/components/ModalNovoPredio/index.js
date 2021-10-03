import React, {useState, useEffect, useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './styles.css';

import api from '../../services/api';

function ModalNovoPredio() {

    //abre e fecha modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const postAPI = () => {
        handleClose();
    }
  
    return (
      <>
        <Button className="botao" onClick={handleShow}>
          Novo prédio
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Cadastro de novo prédio</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={postAPI}>Cadastrar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalNovoPredio;
