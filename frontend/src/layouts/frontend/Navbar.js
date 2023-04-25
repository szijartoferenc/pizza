/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBasketShopping, faContactBook, faHome, faPeopleArrows, faPeopleCarry, faPeopleGroup, faPizzaSlice, faShop, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  
  var g = window.g || {};
  const history = useHistory();
  const LogoutSubmit = (e) =>{
  e.preventDefault();
 
  axios.post(`/api/logout`).then(res => {
    if(res.data.status === 200) 
    {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal("Success",res.data.message,"success");
        history.push('/');
    }
  });

}

 var AuthButtons = '';
  if(!localStorage.getItem('auth_token'))
  {
    AuthButtons = (

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login"> <FontAwesomeIcon icon={faUser} size="lg"/> Bejelentkezés</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register">  <FontAwesomeIcon icon={faPeopleGroup} size="lg"/> Regisztráció</Link>
        </li>
      </ul>

    )
  }
  else
  {
    AuthButtons = (
       
      <li className="nav-item">
        <button type="button" onClick={LogoutSubmit}  className="nav-link btn btn-danger btn-sm text-white">Kijelentkezés</button>
        </li>

    )
  } 

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
  <div className="container">
    <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faPizzaSlice} size="lg"/> Deep Dish Pizza</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><FontAwesomeIcon icon={faHome} size="lg"/> Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faShop} size="lg"/> Rólunk</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact"> <FontAwesomeIcon icon={faContactBook} size="lg"/> Kapcsolat</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pizza"> <FontAwesomeIcon icon={faPizzaSlice} size="lg"/> Pizzák</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faBasketShopping} size="lg"/> Kosár</Link>
        </li>
       {AuthButtons }
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    );
}


export default Navbar;