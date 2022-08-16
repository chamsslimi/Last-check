import React, { useState } from 'react'

import {useDispatch} from 'react-redux';

import { userRegister } from '../redux/actions/authActions';
import {useNavigate} from 'react-router-dom';


function Register() {
  const [data,setData]=useState({name:'',email:'',password:''})
  const dispatch=useDispatch()
 const navigate=useNavigate()

  const handelChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
    dispatch(userRegister(data, navigate ))
    
  }
  return (
    <div>
    <div id="wrapper">
      <form name="login-form" className="login-form" action method="post" onSubmit={handelSubmit}>
        <div className="header">
          <h1>Register Form</h1>
          <span>Fill out the form below to register to my super awesome imaginary control panel.</span>
        </div>
        <div className="content">
          <input  type="text" className="input username" placeholder="Username" name='name' onChange={handelChange} />
          <div className="user-icon" />
          <input  type="email" className="input username" placeholder="Email" name='email' onChange={handelChange} />  
         
          <div className="user-icon" />
          <input  type="password" className="input password" placeholder="Password" name="password" onChange={handelChange} />
          <div className="pass-icon" /> 
          
        </div>
        <div className="footer">
          
          <button type="submit" className="button" >Create Account</button>
        </div>
      </form>
    </div>
    <div className="gradient" />
  </div>



    // <div style={{display:'flex',justifyContent:'center',alignItems:'center',
    // flexWrap:'wrap',width:'1000px',margin:'auto',paddingTop:'50px' ,
    // // border:'2px solid #ffb72a',
    // // borderRadius:'5px',
    // height:'450px'}} >
    //     <img
    //       src={Capture8} 
    //       width="300"
    //       height="350"
          
    //       className="d-inline-block align-top"
    //       alt="logo"
    //     />
    //     <div style={{width:'400px',paddingLeft:'20px'}}>
    //     <Form onSubmit={handelSubmit} >
    //     <Form.Group className="mb-3" controlId="formBasicText">
    //     <Form.Label>Username</Form.Label>
    //     <Form.Control type="text" placeholder="Enter your name" name='name' onChange={handelChange}/>
    //     </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" name='email' onChange={handelChange}/>
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" name='password' onChange={handelChange} />
    //   </Form.Group>
    //   <Button variant='warning' style={{
    //   width:'380px',marginTop:'20px'}} type='submit' >Create Account</Button>
    //   </Form>
     
    //     </div>
    //   </div>
  )
}

export default Register;