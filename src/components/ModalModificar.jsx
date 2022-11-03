import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalModificar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-success" onClick={handleShow}>
        Editar Carro
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Carro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Marca</Form.Label>
              <Form.Control placeholder="Ingrese marca" type="text" id="marca" name="carro-marca"/>
              <Form.Label>Modelo</Form.Label>
              <Form.Control placeholder="Ingrese modelo" type="text" />
              <Form.Label>Km</Form.Label>
              <Form.Control placeholder="Ingrese km" type="text" />
              <Form.Label>Año</Form.Label>
              <Form.Control placeholder="Ingrese año" type="number" />
              <Form.Label>Precio</Form.Label>
              <Form.Control placeholder="Ingrese precio" type="number" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { ModalModificar };
