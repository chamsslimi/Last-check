
import './App.css';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'

import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Site from './pages/site/Site';
import PrivateRoute from './router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { userCurrent } from './redux/actions/authActions';
import Error from './components/Error';
import Dogs from './components/Dogs';
import AddDog from './components/AddDog';
import UsersList from './pages/users/UsersList';
import Posts from './components/Posts';

function App() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(userCurrent())
    }
  },[dispatch])

  const [racename,setRacename]=useState("");
  const [owner,setOwner]=useState("");
  const getRacename=(racename)=> {setRacename(racename);}
  const getOwner=(owner)=> {setOwner(owner);}
  const [name,setname]=useState("");
  const getname=(name)=> {setname(name);}

  return (
    <div>
      <NavBar  getRacename={ getRacename} getOwner={getOwner} getname={getname} />
      <Error/>
      <Routes>
      <Route path='/' element={<Accueil/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />

      <Route path='/site' element={
        <PrivateRoute>
         <Site/>
        </PrivateRoute>
      
      } />
      <Route path='/dogs' element={ 
      <PrivateRoute>
        <Dogs  racename={racename} owner={owner} />
        </PrivateRoute>
        } /> 
        <Route path='/addDog' element={
        <PrivateRoute>
        <AddDog/>
        </PrivateRoute>
        } />
        <Route path='/myposts' element={
        <PrivateRoute>
        <Posts racename={racename} />
        </PrivateRoute>
        } />

<Route path='/allUsers' element={
        <PrivateRoute>
        <UsersList name={name} />
        </PrivateRoute>
        } />

      <Route path='/*' element={<NotFound/>} />
      </Routes>
     
    </div>
    

      
    
    
    
    
    
    
    
  );
}

export default App;
