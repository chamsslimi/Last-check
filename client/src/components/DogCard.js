import axios from 'axios';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';


import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { deleteDogs } from '../redux/actions/dogActions';
import './DogCard.css';
import Edit from './Edit';

function DogCard({element}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(state=>state.authReducer.user);
    const inputRef=useRef();
    
   

    const handelDelete=()=>{
      if(window.confirm("Are you sure?")){
        dispatch(deleteDogs(element._id));
      }   
    };
 
    const edit=async(e)=>{
      const config={
        headers:{
          authorization:localStorage.getItem('token')
        }

      }
      let data=new FormData()
      data.append("dogImage",e.target.files[0])
      try {
        await axios.put(`/api/dogs/uploadpicture/${element._id}`,data,config)
       navigate('/dogs')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div id="container">	
        {/* Start	Product details */}
        <div className="product-details">
          {/* 	Product Name */}
          <h1>{element.racename}</h1>
          {/* 		<span class="hint new">New</span> */}
          {/* 		<span class="hint free-shipping">Free Shipping</span> */}
          {/* 		the Product rating */}
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-half-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </span>
          {/* The most important information about the product */}
          <p className="information">" {element.description} "</p>
          {/* 		Control */}
          <div className="control">
            {/* Start Button buying */}
            <button className="fr">
              {/* 		the Price */}
              <span className="price">{element.price} DT</span>
              {/* 		shopping cart icon*/}
              
              {/* 		Buy Now / ADD to Cart*/}
             
            </button>
            {/* End Button buying */}
          </div>
        </div>
        {/* 	End	Product details   */}
        {/* 	Start product image & Information */}
        <div className="product-image">
          <img src={element.pictureUrl?`/uploads/${element.pictureUrl}`:
      "https://m.media-amazon.com/images/I/41NPRPAb+oL._AC_SX425_.jpg"} />
          {/* 	product Information*/}
          <div className="info">
            <h2>To contact the owner</h2>
            <ul>
            
              {/* <li><strong>Sun Needs: </strong>Full Sun</li>
              <li><strong>Soil Needs: </strong>Damp</li>
              <li><strong>Zones: </strong>9 - 11</li> */}
              <li><strong>Owner: </strong>{element.owner} </li>
              <li><strong>Phone: </strong>{element.phone}<br/></li>
              <li><strong>Adress: </strong>{element.adresse}</li>
              <div style={{display:'flex',justifyContent:'space-around',width:'270px',marginTop:'100px'}}>
          { (user.role==='admin' || element.userId===user._id) &&<>
          <Button variant="outline-light" 
        onClick={()=>{inputRef.current.click()}}>
           upload picture </Button>
        <input type='file' ref={inputRef} onChange={edit} hidden />
        <Edit element={element} /><br/>
        <Button variant="outline-danger" onClick={handelDelete}>Delete</Button><br/>
       
        <div>
        </div>
        </>}
        
        </div>
            </ul>
          </div>
        </div>
        {/*  End product image  */}
      </div>










  /* <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" 
      src={element.pictureUrl?`/uploads/${element.pictureUrl}`:
      "https://m.media-amazon.com/images/I/41NPRPAb+oL._AC_SX425_.jpg"}
       alt="..." />
      <Card.Body>
        <Card.Title>{element.racename} </Card.Title>
        <Card.Text>
          {element.owner} <br/>
          {element.phone} <br/>
          
          <i className="fa-light fa-heart"></i>
          {element.adresse} <br/>
          {element.price}
        </Card.Text>
        <div style={{display:'flex',justifyContent:'space-around',width:'270px'}}>
          {element.userId===user._id &&<>
          <Button variant="outline-dark" 
        onClick={()=>{inputRef.current.click()}}>
           upload picture </Button>
        <input type='file' ref={inputRef} onChange={edit} hidden />
        <Edit element={element} /><br/>
        <Button variant="outline-danger" onClick={handelDelete}>Delete</Button><br/>
       
        <div>
        </div>
        </>}
        
        </div>
      </Card.Body>
    </Card> */








    
  )
}

export default DogCard;