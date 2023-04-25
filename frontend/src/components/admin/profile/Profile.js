/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
// import Navbar from "../../../layouts/frontend/Navbar";
import axios from 'axios';
import swal from 'sweetalert';
import {Link, useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faRegistered, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUniregistry } from "@fortawesome/free-brands-svg-icons";

function Profile() {
    const [userInput, setUser] = useState({
        
        name: '',
        email: '',
        password: '',
        role_as: '',
        error_list: [],
     });
    
     const handleInput = (e) => {
        e.persist();
        setUser({...userInput,[e.target.name]:e.target.value})
     }
    
     const submitUser = (e) => {
        e.preventDefault();
        
        const data = {
            name:userInput.name,
            email:userInput.email,
            password:userInput.password,
            role_as:userInput.role_as,
             
    
        }
            axios.post('/api/store-profile', data).then(res=>{
                if(res.data.status === 200)
                {
                    swal("Success",res.data.message,"success");
                    document.getElementById('USER_FORM').reset();
                }
                else if(res.data.status === 400)
                {
                    setUser({...userInput, error_list:res.data.errors});
    
                }
                window.location.reload(false);
            });
                 
     }
    
     let display_errors = [];
      if(userInput.error_list)
      {
        display_errors = [
            userInput.error_list.name,
            userInput.error_list.email,
            userInput.error_list.password,
        ]
      }
    
    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Felhasználó hozzáadása</h1>
    
           {
            
            display_errors.map((item, index)=>{
                    return(<p className="mb-3" key={index}>{item}</p>)
                })
    
    
           }     
               
            
            <form onSubmit={submitUser}  id="USER_FORM">
           
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SEO tags</button>
                  
                  </li> */}
                 
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane card-body border fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="form-group mb-3">
                <label>Név</label>
                <input type="text" name="name" onChange={handleInput} value={userInput.name} className="form-control" />
                <span>{userInput.error_list.name}</span>
                </div>
                
                <div className="form-group mb-3">
                <label>Email</label>
                <input type="email" name="email" onChange={handleInput} value={userInput.email} className="form-control" />
                <span>{userInput.error_list.email}</span>
                </div>
                
                <div className="form-group mb-3">
                <label>Jelszó</label>
                <input type="text" name="password" onChange={handleInput} value={userInput.password} className="form-control" />
                <span>{userInput.error_list.password}</span>
                </div>
                
                
                <div className="form-group mb-3">
                <label>Állapot</label>
                <input type="checkbox" name="role_as" onChange={handleInput} value={userInput.role_as} />
                </div>
                
                </div>
               
                  
        </div>
                <button type="submit" className="btn btn-primary px-4 float-end">Rögzítés</button>
            </form>
    </div>
    );

}



export default Profile;