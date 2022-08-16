import React from 'react'
import { Link } from 'react-router-dom';
import Capture7 from '../Capture7.PNG';
import './NotFound.css';

function NotFound() {
  return (
    <div className="bodyNotFound">
    <div className="container">
      <div className="error">
        <p className="p">4</p>
        <span className="dracula">			
          <div className="con">
            <div className="hair" />
            <div className="hair-r" />
            <div className="head" />
            <div className="eye" />
            <div className="eye eye-r" />
            <div className="mouth" />
            <div className="blod" />
            <div className="blod blod2" />
          </div>
        </span>
        <p className="p">4</p>
        <div className="page-ms">
          <p className="page-msg"> Oops, the page you're looking for Disappeared </p>
          <Link to='/'><button className="go-back">Go Back</button></Link>
        </div>
      </div>
    </div>
    <iframe style={{width: 0, height: 0, border: 'none'}} scrolling="no" frameBorder="no" allow="autoplay" src="https://instaud.io/_/2Vvu.mp3" />
  </div>

  
  )
}

export default NotFound;