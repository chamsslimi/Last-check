import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../redux/actions/dogActions';
import DogCard from './DogCard';

function Dogs({racename,owner}) {
const dogs=useSelector(state=>state.dogReducer.dogs)

   const dispatch=useDispatch();

   useEffect(()=> {
dispatch(getDogs())
   }
    ,[])
  return (
    
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',margin:'auto', paddingTop:'30px'}}>
        {
        
        dogs.filter(dog=>dog.racename.toLowerCase().includes(racename.toLowerCase()) && dog.owner.toLowerCase().includes(owner.toLowerCase()))
        .map(element=>
          <DogCard element={element} key={element._id} />)}
           
        
       
        
        </div>
  )
}

export default Dogs