import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {

    return ( 

        <footer className="py-4 bg-dark mt-auto">
        <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; DeepDish Pizza 2023</div>
                
                <div>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                    &middot;
                    <Link to="#">Terms &amp; Conditions</Link>
                    
                    
                </div>
                
               
            </div>
        </div>
    </footer>


    );

}

export default Footer;