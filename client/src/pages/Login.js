import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userLogin } from '../redux/actions/authActions';
import './style.css';


function Login() {
  const [data,setData]=useState({email:'',password:''})
  const dispatch=useDispatch()
 const navigate=useNavigate()

  const handelChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
    dispatch(userLogin(data, navigate ))
    
  }
  return (
    <div className="bodyLogin">
    <div id="wrapper">
      <form name="login-form" className="login-form" action method="post" onSubmit={handelSubmit}>
        <div className="header">
          <h1>Login Form</h1>
          <span>Fill out the form below to login to my super awesome imaginary control panel.</span>
        </div>
        <div className="content">
          <input className="input username" 
          type="email" placeholder="Enter email" name='email' onChange={handelChange} />
          <div className="user-icon" />
          <input name="password" type="password" className="input password" placeholder="Password" onChange={handelChange}/>
          <div className="pass-icon" />   
        </div>
        <div className="footer">
          {/* <input type="submit" name="submit" defaultValue="Login" className="button" /> */}
          <button type="submit" className="button">LOGIN</button>
          {/* <input type="submit" name="submit" defaultValue="Register" className="register" /> */}
        </div>
      </form>
    </div>
    <div className="gradient" />
  </div>





    // <div >
    //    <div style={{display:'flex',justifyContent:'center',alignItems:'center',
    // flexWrap:'wrap',width:'1000px',margin:'auto',paddingTop:'50px' ,
    // // border:'2px solid #ffb72a',
    // // borderRadius:'5px',
    // height:'450px'}} >
    //     <img
    //       src={Capture1} 
    //       width="300"
    //       height="350"
          
    //       className="d-inline-block align-top"
    //       alt="logo"
    //     />
    //     <div style={{width:'400px',paddingLeft:'20px'}}>
    //     <Form onSubmit={handelSubmit}>
        

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" name='email' onChange={handelChange}/>
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" name='password' onChange={handelChange}/>
    //   </Form.Group>
    //   <Button variant='warning' style={{
    //   width:'380px',marginTop:'100px'}} type='submit' >LOGIN</Button>
    //   </Form>
      
    //     </div>
    //   </div>
    // </div>
  )
}

export default Login;