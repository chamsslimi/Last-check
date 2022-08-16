import axios from 'axios';
import React, { useRef, useState } from 'react'
import {Button,InputGroup} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userCurrent } from '../redux/actions/authActions';
import { addDogs } from '../redux/actions/dogActions';

function AddDog() {
    const navigate=useNavigate();
    
    const [dog,setDog]=useState({racename:"", birthDate:"",sex:"",owner:"",phone:"",adresse:"",price:"",description:""})
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        setDog({
          ...dog,[e.target.name]:e.target.value  
        })
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(addDogs(dog) )
        navigate(('/myposts'))
    }
   
  return (
    <div style={{ display:'flex',justifyContent:'space-around', width:'500px',margin:'auto',border:'box',borderRadius:'5px',backgroundColor:'black',color:'white',marginTop:'20px'}}>
       
    <Form>
     <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Racename</Form.Label>
        <Form.Control type="text" placeholder="Enter Racename" 
        name="racename" onChange={handleChange} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Describe your dog" 
        name="description" onChange={handleChange} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>BirthDate</Form.Label>
        <Form.Control type="date" placeholder="Birth Date" 
        name="birthDate" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Female/Male</Form.Label>
        <Form.Control type="text" placeholder="female/male" 
        name="sex" onChange={handleChange}/>
      </Form.Group>
      </div>
      <div> 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Owner name</Form.Label>
        <Form.Control type="text" placeholder="Owner" 
        name="owner" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Owner Phone</Form.Label>
        <Form.Control type="number" placeholder="Phone" 
        name="phone" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Owner Adress</Form.Label>
        <Form.Control type="text" placeholder="Adress" 
        name="adresse" onChange={handleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Price</Form.Label>
        <Form.Control type="number" placeholder="put the price"
        name="price" onChange={handleChange}/>
      </Form.Group>
      <Button variant="outline-light" type="submit"
       onClick={handleAdd} style={{width:'450px',marginLeft:'120px',margin:'auto'}}>Submit
      </Button>
      </div>
      
        
    </Form>
 


    </div>
  )
}

export default AddDog;