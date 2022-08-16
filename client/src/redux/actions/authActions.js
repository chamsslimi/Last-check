import axios from 'axios';
import { ALL_USERS, CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from '../types';
import { setAlert } from './alertAction';

export const userRegister=(data,navigate)=>async(dispatch)=>{
    try {
        console.log(data)
        const res=await axios.post('/api/auth/signup',data)
       setInterval(() => {
        dispatch({
            type:REGISTER,payload:res.data
        })
       }, 3000);
         dispatch(setAlert(res.data.msg,"success"))
         navigate('/site')
    } catch (error) {
        dispatch({
            type:FAIL,
        })
        error.response.data.errors.forEach(err => dispatch(setAlert(err.msg,"danger")) 
            
        );
    }
}
export const userLogin=(data,navigate)=>async(dispatch)=>{
    try {
        console.log(data)
        const res=await axios.post('/api/auth/signin',data)
        dispatch({
            type:LOGIN,payload:res.data
        }) 
        dispatch(setAlert(res.data.msg,"success"))
         navigate('/site')
    } catch (error) {
        dispatch({
            type:FAIL,
        })
        error.response.data.errors.forEach(err => dispatch(setAlert(err.msg,"danger")))
    }
}
export const logout=()=>{
    return {
        type:LOGOUT
    }
}
export const userCurrent=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get('/api/auth/current',config)
        dispatch({type:CURRENT,payload:res.data})
    } catch (error) {
        dispatch({
            type:FAIL,
        })
    }
}

export const EditProfile=(newUser)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
      await axios.put('/api/user/updateprofile',newUser,config);
      
    } catch (error) {
        console.log(error);
    }
 } 
  export const allUsers=()=> async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
      const res= await axios.get('/api/user/allusers',config);
     console.log(res.data.users)
      dispatch({type: ALL_USERS,payload:res.data.users})  
    } catch (error) {
       console.log(error) 
    }
}

export const deleteUsers=(id)=>async (dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
       await axios.delete(`/api/user/deleteUser/${id}`,config);
     dispatch(allUsers())
        
    } catch (error) {
       console.log(error) 
    }
 }