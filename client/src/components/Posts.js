import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDogs } from '../redux/actions/dogActions';
import DogCard from './DogCard'; 

function Posts({racename}) {
    const dogs=useSelector(state=>state.dogReducer.dogs)

   const dispatch=useDispatch();

   useEffect(()=> {
dispatch(getUserDogs())
   }
    ,[])
  return (
    
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',margin:'auto', paddingTop:'30px'}}>
            {dogs.filter(dog=>dog.racename.toLowerCase().includes(racename.toLowerCase())).map(element=>
          <DogCard element={element} key={element._id} />)}
    </div>
 ) 
}

export default Posts;