import { faBoxesStacked, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Thankyou() {
    return  (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h3>Home / Köszönjük!</h3>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div class="col-md-12">
                        <div className="card text-center p-5">
                          <h1><FontAwesomeIcon icon={faBoxesStacked} size="lg"/> Köszönjük, hogy a Deep Dish Pizza termékeit választotta!<br/> <br/>
                          <FontAwesomeIcon icon={faTruckFast} size="lg"/> Rendelése folyamatban van.</h1>



                          <h1>
                              <Link to="/"  className="btn btn-success">Vissza a kezdőoldalra</Link>
                          </h1>
                        </div>
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default Thankyou;