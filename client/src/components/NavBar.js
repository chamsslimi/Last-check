import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react'

import Capture1 from '../Capture1.PNG';
import { Link,  Route,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';


function NavBar({getRacename,getOwner,getname}) {
  const auth=useSelector(state=>state.authReducer.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  
  
  

  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"black"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"200px"}}> 
        <img
          src={Capture1} 
          width="70"
          height="60"
          
          className="d-inline-block align-top"
          alt="logo"
        />
       <p style={{fontStyle:"bold",fontWeight:"bolder",fontSize:"24px",color:"grey",marginTop:"9px",textDecoration:"none"}}>Dog Store </p>
        </div>
        <div>
       { auth ? <>
       <Form style={{display:'flex',justifyContent:'space-around', alignItems:'center',paddingRight:'20px',width:'710px',height:"40px",marginTop:"10px"}}>
      
       <>
       <Form.Control type="text" placeholder="search by racename" onChange={e=>getRacename(e.target.value) } style={{marginRight:'10px'}} />
        <Form.Control type="text" placeholder="search by owner" onChange={e=>getOwner(e.target.value) }style={{marginRight:'10px'}} />
        <Form.Control type="text" placeholder="search user" onChange={e=>getname(e.target.value) }style={{marginRight:'10px'}} />
        </> 

       <Link to='/site'><Button variant="outline-light" style={{marginRight:'10px'}}> Profile </Button>
       </Link>
        <Button variant="outline-light" onClick={()=>{dispatch(logout());navigate('/')}}>
           Logout
            </Button> 
       </Form>
       
        </> : 
        <div style={{display:"flex",justifyContent:"space-around",width:"200px",height:"40px",marginTop:"10px"}} >
        <Link to='/register'><Button variant="outline-warning">
           Register
            </Button></Link>
        <Link to='login'><Button variant="outline-warning"> Login </Button></Link>
        </div>
        }</div>
      

     </div>
  )
}

export default NavBar