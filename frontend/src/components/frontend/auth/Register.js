/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
// import Navbar from "../../../layouts/frontend/Navbar";
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faRegistered, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUniregistry } from "@fortawesome/free-brands-svg-icons";

function Register(){
    const history = useHistory();
    const [registerInput, setRegister] = useState ({
       name:'',
       email:'',
       password:'',
       error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister ({...registerInput, [e.target.name]:e.target.value});
    }

    const registerSubmit = (e) => {

        e.preventDefault();

        const data = {
         name: registerInput.name,
         email: registerInput.email,
         password: registerInput.password,

        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {

                if(res.data.status === 200) 
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success",res.data.message,"success");
                    history.push('/');
                }
                else {

                    setRegister({...registerInput,error_list:res.data.validation_errors});
                }

                window.location.reload(false);
        });
    });
    
}




    return (

        <div>
            {/* <Navbar/> */}
           
            <div className="container py-5">
                <div className="row justify-content-center">
                <div className="col-md-6">
                <h1 className="text-center">
                 <FontAwesomeIcon icon={faPeopleGroup} size="lg"/>
                 
                 </h1>
                    <div className="card">
                        <div className="card-header">
                                <h4>Regisztráció</h4>
                        </div>
                        <div className="card-body">
                         <form onSubmit={registerSubmit}>
                            <div className="form-group mb-3">
                            <label>Teljes név:</label>
                            <input type="" name="name" onChange={handleInput} value={registerInput.name} className="form-control"/>
                            <span>{registerInput.error_list.name}</span>
                            </div>
                            <div className="form-group mb-3">
                            <label>Email cím:</label>
                            <input type="text" name="email" onChange={handleInput} value={registerInput.email} className="form-control"/>
                            <span>{registerInput.error_list.email}</span>
                            </div>
                            <div className="form-group mb-3">
                            <label>Jelszó:</label>
                            <input type="text" name="password" onChange={handleInput} value={registerInput.password} className="form-control"  />
                            <span>{registerInput.error_list.password}</span>
                            </div>
                           
                            <div className="form-control mb-3">
                            <button type="submit" className="btn btn-primary">Regisztráció</button>

                            </div>
                         </form>

                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>

    );

}

export default Register;