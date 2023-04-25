/* eslint-disable no-unused-vars */
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faBars, faDoorClosed, faDoorOpen, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import axios from 'axios';

const Navbar = () => {
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
          <Link className="dropdown-item" to="/">Logout</Link>
          </li>
  
          {/* <li className="nav-item">
            <Link className="nav-link" to="/register">Regisztráció</Link>
          </li> */}
        </ul>
  
      )
    }
    else
    {
      AuthButtons = (
         
        <li className="nav-item">
          <button type="button" onClick={LogoutSubmit}  className="dropdown-item text-white"><FontAwesomeIcon icon={faDoorOpen} size="lg" />Kijelentkezés</button>
          
          </li>
  
      )
    } 
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
         {/* Navbar Brand */}
        <Link className="navbar-brand ps-3" to="/admin">Pizza admin</Link>
        {/* Sidebar Toggle */}
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"to="#!"><FontAwesomeIcon icon={faBars} size="lg" /></button>
        {/* Navbar Search */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><FontAwesomeIcon icon={faSearch} size="lg" /></button>
            </div>
        </form>
         {/* Navbar */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <Link to="/home" className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="true">
                <FontAwesomeIcon icon={faUser} size="lg" />
                
                </Link>
                {/* <li><Link className="dropdown-item" to="/home">Logout</Link></li> */}
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="#!">Settings</Link></li>
                    <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/home">Logout</Link></li>
                </ul>
                {AuthButtons }
            </li>
        </ul>
    </nav>
    );
        
    

}

export default Navbar;