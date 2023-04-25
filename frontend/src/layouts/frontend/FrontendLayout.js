import React from 'react';
import {Route, Switch } from 'react-router-dom';
import publicRoutesList from '../../routes/Publicroutelist';
import Navbar from '../../layouts/frontend/Navbar';
import Footer from '../../layouts/frontend/Footer';
const FrontendLayout = () => {

    return (
        <div> 
        <Navbar/>
       

            <div>
                
              <Switch>
              {publicRoutesList.map((routedata, idx)=>{
                 return (
                    routedata.component && (
                      <Route 
                          key={idx}
                          path={routedata.path}
                          exact={routedata.exact}
                          name={routedata.name}
                          render={(props)=>(
                            <routedata.component {...props} />
                          )}
                            
                      />

                    )
                 )
              })}

              
              

              </Switch>
               
              

            </div>
            <Footer/>
        </div>
       
    );
      
    
    

}

export default FrontendLayout;