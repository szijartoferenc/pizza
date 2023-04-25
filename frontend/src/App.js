import React from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import './App.css';
// import AdminLayout from './layouts/admin/AdminLayout';
import AdminPrivateRoute from './AdminPrivateRoute';
import axios from "axios";

// import Home from "./components/frontend/Home";
// import Contact from './components/frontend/Contact';
// import About from './components/frontend/About';

import Page403 from "./components/errors/Page403";
import Page404 from "./components/errors/Page404";
import PublicRoute from "./PublicRoute";




axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
function App() {
  return (
    
      <Router>
        <Switch>
          {/* <Route  exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact } /> */}

          <AdminPrivateRoute path="/admin" name="Admin"/>
          <PublicRoute path="/" name="Home" />

          <Route path="/403" component={Page403} />
          <Route path="/404" component={Page404 } />

          
          {/* <Route path="/" element={<div>Default Page Content</div>} /> */}
          <Route path="/login">
            {localStorage.getItem("auth_token") ? (<Redirect to="/" /> ) : (<Login /> ) }
            </Route>
            
            <Route path="/register">
            {localStorage.getItem("auth_token") ? (<Redirect to="/" /> ) : (<Register /> ) }
            </Route>
          

          {/* <Route path="/admin" name="Admin" render={(props)=> <AdminLayout {...props} />} /> */}
        
         </Switch>
      </Router>
          
  
  );
  
}

export default App;
