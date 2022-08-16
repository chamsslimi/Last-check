import axios from "axios"
import { GET_DOGS, GET_USERDOGS } from "../types";


export const getDogs=()=> async(dispatch)=>{
    try {
      const res= await axios.get('/api/dogs/alldogs');
     
      dispatch({type: GET_DOGS,payload:res.data.dogs})  
    } catch (error) {
       console.log(error) 
    }
}
export const getUserDogs=()=> async(dispatch)=>{
   const config={
      headers:{
          authorization:localStorage.getItem('token')
      }
  }
   try {
     const res= await axios.get('/api/dogs/userdog',config);
    
     dispatch({type: GET_USERDOGS,payload:res.data.dogs})  
   } catch (error) {
      console.log(error) 
   }
}


export const addDogs=(formData)=>async (dispatch)=>{
   const config={
      headers:{
          authorization:localStorage.getItem('token')
      }
  }
    try {
       await axios.post('/api/dogs/adddog',formData,config);
     dispatch(getDogs()) 
        
    } catch (error) {
       console.log(error) 
    }
}



export const deleteDogs=(id)=>async (dispatch)=>{
   try {
      await axios.delete(`/api/dogs/deletedog/${id}`);
    dispatch(getDogs())
       
   } catch (error) {
      console.log(error) 
   }
}

export const EditDog=(id,newDog)=>async(dispatch)=>{
   try {
     await axios.put(`/api/dogs/updatedog/${id}`,newDog);
     
      dispatch(getDogs()) 
   } catch (error) {
       console.log(error);
   }
} 