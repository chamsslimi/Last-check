import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import { EditDog } from '../redux/actions/dogActions';


function Edit({element}) {

  const [show, setShow] = useState(false);
  const [racename, setracename] = useState(element.racename);
  const [birthDate, setbirthDate] = useState(element.birthDate);
  const [sex, setsex] = useState(element.sex);
  const [owner, setowner] = useState(element.owner);
  const [phone, setphone] = useState(element.phone);
  const [adresse, setadresse] = useState(element.adresse);
  const [price, setprice] = useState(element.price);
  const [description, setdescription] = useState(element.description);

  const dispatch=useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(EditDog(element._id, {racename,birthDate,sex,owner,phone,adresse,price,description }));
    handleClose()
  };
  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>RaceName</Form.Label>
              <Form.Control
              value={racename}
              onChange={e=>{setracename(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
              value={description}
              onChange={e=>{setdescription(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control
              value={birthDate}
              onChange={e=>{setbirthDate(e.target.value)}}
                type="date"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Male or Female</Form.Label>
              <Form.Control
              value={sex}
              onChange={e=>{setsex(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Owner</Form.Label>
              <Form.Control
              value={owner}
              onChange={e=>{setowner(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Owner Phone Number </Form.Label>
              <Form.Control
              value={phone}
              onChange={e=>{setphone(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Owner Adresse </Form.Label>
              <Form.Control
              value={adresse}
              onChange={e=>{setadresse(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
              value={price}
              onChange={e=>{setprice(e.target.value)}}
                type="number"
                
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;