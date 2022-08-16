import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import {useDispatch} from 'react-redux';
import { EditProfile, userCurrent } from '../../redux/actions/authActions';

function Edit({user}) {

  const [show, setShow] = useState(false);
  const [name, setname] = useState(user.name);
  const [email, setemail] = useState(user.email);
  const [country, setcountry] = useState(user.country || "");
  const [ocuppation, setocuppation] = useState(user.ocuppation || "");
  const [birthday, setbirthday] = useState(user.birthday || "");
  const [phone, setphone] = useState(user.phone || "");


  const dispatch=useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(EditProfile({name,email,country,ocuppation,birthday,phone}));
    dispatch(userCurrent())
    handleClose()
  };
  return (
    <>
    <Button variant="outline-dark"  onClick={handleShow}>  Edit profile</Button>
      {/* <Button variant="info" onClick={handleShow}>
        Edit
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              value={name}
              onChange={e=>{setname(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
              value={email}
              onChange={e=>{setemail(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
              value={birthday}
              onChange={e=>{setbirthday(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control
              value={country}
              onChange={e=>{setcountry(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ocuppation</Form.Label>
              <Form.Control
              value={ocuppation}
              onChange={e=>{setocuppation(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
              value={phone}
              onChange={e=>{setphone(e.target.value)}}
                type="text"
                
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