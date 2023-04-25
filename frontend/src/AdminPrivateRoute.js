import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory} from "react-router-dom";
import AdminLayout from  './layouts/admin/AdminLayout';
import swal from 'sweetalert';

 function AdminPrivateRoute({...rest}){
   
  const history = useHistory();
  const [Authenticated, setAuthenticated] = useState(false);
  
  const [loading, setLoading] = useState(true);
  
   useEffect(() => {
     axios.get(`/api/checkingAuthenticated`).then (res =>{
        if(res.data.status === 200)
        {
            setAuthenticated(true);
           
        }
        setLoading(false);

     });
   
     return () => {
        setAuthenticated(false);
     }
   }, []);

   axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
        if(err.response.state === 401)
        {
            swal("Unauthorized",err.response.message,"warning");
            
            history.push('/');
        }
        return Promise.reject(err);


   });

   axios.interceptors.response.use(function(response){   
    return response;
   }, function(error) {
     if (error.response.status === 403)  //belépés megtagadva
     {
       swal("Forbidden", error.response.data.message,"warning");
       history.push('/403');
     }
     else if(error.response.status === 404) //az oldal nem található
     {
      swal("404 Error", "URL/PAGE Not Found","warning");
       history.push('/404'); 
     }

     return Promise.reject(error);

   }
    
   );

   if(loading)
   {

     return <h1>Az oldal betöltése </h1>

   }
  
  // return <AdminLayout/>
    return (
     
      
                <Route {...rest}
                 render = { ({props, location}) =>
                  Authenticated ?
                  (<AdminLayout {...props} />) :
                  (<Redirect to={{pathname: "/login", state:{from: location} }}/>)
                 }
                />
          
       

  );

}


export default AdminPrivateRoute;