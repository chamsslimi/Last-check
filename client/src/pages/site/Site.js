import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Site.css'; 
import axios from 'axios';
import {userCurrent} from '../../redux/actions/authActions';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';
import { Button } from 'react-bootstrap';

function Site() {
  
  const user=useSelector(state=>state.authReducer.user)
  const loading=useSelector(state=>state.authReducer.loading)
  const inputRef=useRef();
const dispatch=useDispatch();

  const editProfile=async(e)=>{
    const config={
      headers:{
        authorization:localStorage.getItem('token')
      }
    
    }
    const data=new FormData()
    data.append("myImage",e.target.files[0])
    try {
      await axios.put('/api/user/uploadimage',data,config)
      dispatch(userCurrent())
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <>
  {
    loading ? <h3>Loading.....</h3>:
  <div className='body' > 
    <div className="row py-5 px-4"> 
    <div className="col-md-5 mx-auto"> 
      <div className="bg-white shadow rounded overflow-hidden">
        <div className="px-4 pt-0 pb-4 cover">
          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-around'}} className="media align-items-end profile-head"> 
             <div className="profile mr-3"> 
           
              <img  src={user?.imageUrl ?`/uploads/${user?.imageUrl}`:"https://bootdey.com/img/Content/avatar/avatar3.png"} alt="..." width={130} className="rounded mb-2 img-thumbnail" />
              
            </div> 
            <div className="media-body mb-5 text-white"> 
              <h4 className="mt-0 mb-0">{user?.name}</h4> 
              <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2" />{user?.email}</p> 
            </div> 
          </div> 
        </div>
        
        <div style={{marginTop:'60px'}}  className="bg-light p-4 d-flex justify-content-end text-center">
        
        <EditProfile  user={user} />
         <div>
        <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="outline-dark"  onClick={()=>inputRef.current.click()}>
           Upload image</Button>
           <input type='file' ref={inputRef} hidden onChange={editProfile}/></div>
         <Link to='/dogs'><Button style={{marginRight:'10px'}} variant="outline-dark">
                 View all Dogs </Button><br/>
       </Link>
       <Link to='/addDog'><Button variant="outline-dark" >
                        Add Dog </Button></Link> 

          </div>   
             
        <div className="px-4 py-3">
          <h5 className="mb-0">About</h5> 
          <div className="p-4 rounded shadow-sm bg-light"> 
            <p className="font-italic mb-0">He/she is {user?.ocuppation}</p>
            <p className="font-italic mb-0">Lives in {user?.country}</p>
            <p className="font-italic mb-0">phoneNumber : {user?.phone}</p> 
            <p className="font-italic mb-0">Birthdate : {user?.birthday}</p>
          </div> </div> 
        <div className="py-4 px-4">
          <div className="d-flex align-items-center justify-content-between mb-3"> 
            
           {user.role==='admin'?<Link to='/allUsers'><Button variant="outline-dark">Show all Users</Button></Link>:null} 
           <Link to='/myposts'><Button variant="outline-dark">Show all my posts</Button></Link>
          </div> 
        </div>
      </div>
    </div>
  </div>
  </div>
  
      }
    </>
  );
    }
export default Site ;