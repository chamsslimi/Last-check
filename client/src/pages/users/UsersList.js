import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../redux/actions/authActions';
import UserCard from './UserCard';

function UsersList({name}) {
    let users=useSelector(state=>state.userReducer.users)
    const dispatch=useDispatch();
    useEffect(()=> {
        dispatch(allUsers())
           }
            ,[])
   
  return (
    <div style={{ display: 'flex',justifyContent: 'space-around',flexWrap: 'wrap',
    alignItems: 'center',
    marginTop:'20px',
    width:'1300px',height:'250px'}}>
       
         {
        users.filter(elt=>elt.name.toLowerCase().includes(name.toLowerCase())). map(user=>
            <UserCard user={user} key={user._id} />
          
        )
         } 
    </div>
  )
}

export default UsersList