import { faAddressCard, faBusinessTime, faMailBulk, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {

    return ( 

        <footer className="py-4 bg-dark mt-auto px-4">
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Deep Dish Pizza  2023</div>
                <div className="text-white">
                    <p className="text-center">
                    <FontAwesomeIcon icon={faTruckFast} size="lg"  /> Deep Dish Pizza GYORS KISZÁLLÍTÁS <br />
                    <FontAwesomeIcon icon={faPhone} size="sm"  /> 661 895 XXX  |  <FontAwesomeIcon icon={faMailBulk} size="sm"  />  info@deepdishpizza.eu  | <FontAwesomeIcon icon={faAddressCard} size="sm"  />  Minta utca 1, Mintaváros, Magyarország <br />
                    <FontAwesomeIcon icon={faBusinessTime} size="lg"  /> Minden nap 11 órától - 23 óráig
                    </p>
                </div>
                <div>
                    <Link to="/privacypublicy">Adatvédelmi Nyilatkozat</Link>
                    &middot;
                    <Link to="/termscondition">Felhasználási feltételek</Link>
               </div>
                
            </div>
        </div>
    </footer>

    );

}

export default Footer;