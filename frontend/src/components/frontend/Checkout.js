/* eslint-disable default-case */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function Checkout()
{
    const history = useHistory();
    if(!localStorage.getItem('auth_token')){
        history.push('/');
        swal("Warning","Jelentkezzen be a Kosár oldalra","error");
    }
    
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;

    const [checkoutInput, setCheckoutInput] = useState({
        lastname: '',
        firstname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    });
    const [error, setError] = useState([]);

    useEffect(() => {

        let isMounted = true;

        axios.get(`/api/cart`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setCart(res.data.cart);
                    setLoading(false);
                }
                else if(res.data.status === 401)
                {
                    history.push('/');
                    swal("Warning",res.data.message,"error");
                }
            }
        }); 
 
        return () => {
            isMounted = false
        };
    }, [history]);

    const handleInput = (e) => {
        e.persist();
        setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value });
    }

   

    const submitOrder = (e) => {
        e.preventDefault();

        const data = {
            lastname: checkoutInput.lastname,
            firstname: checkoutInput.firstname,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            state: checkoutInput.state,
            zipcode: checkoutInput.zipcode,
            
        }

        axios.post(`/api/place-order`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Megrendelés sikeresen leadva",res.data.message,"success");
                setError([]);
                history.push('/thankyou');
            }
            else if(res.data.status === 422)
            {
                swal("Minden mező kitöltése kötelező","","error");
                setError(res.data.errors);
            }
        });

              
    }

    if(loading)
    {
        return <h4>Rendelés betöltése...</h4>
    }

    var checkout_HTML = '';
    if(cart.length > 0)
    {
        checkout_HTML = <div>
            <div className="row">

            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <h4>Rendelési adatok</h4>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Vezetéknév</label>
                                    <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" />
                                    <small className="text-danger">{error.lasttname}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Keresztnév</label>
                                    <input type="text" name="firstname" onChange={handleInput} value={checkoutInput.firstname} className="form-control" />
                                    <small className="text-danger">{error.firstname}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Telefonszám</label>
                                    <input type="text" name="phone" onChange={handleInput} value={checkoutInput.phone} className="form-control" />
                                    <small className="text-danger">{error.phone}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Email cím</label>
                                    <input type="email" name="email" onChange={handleInput} value={checkoutInput.email} className="form-control" />
                                    <small className="text-danger">{error.email}</small>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <label> Lakcím</label>
                                    <textarea rows="3" name="address" onChange={handleInput} value={checkoutInput.address} className="form-control"></textarea>
                                    <small className="text-danger">{error.address}</small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Város</label>
                                    <input type="text" name="city" onChange={handleInput} value={checkoutInput.city} className="form-control" />
                                    <small className="text-danger">{error.city}</small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Megye</label>
                                    <input type="text" name="state" onChange={handleInput} value={checkoutInput.state} className="form-control" />
                                    <small className="text-danger">{error.state}</small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Irányítószám</label>
                                    <input type="text" name="zipcode" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" />
                                    <small className="text-danger">{error.zipcode}</small>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-end">
                                    <button type="button" className="btn btn-primary mx-1" onClick={ (e) => submitOrder(e, 'cod') }>Rendelés leadása</button>
                                    
                                    

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Termék</th>
                            <th>Ár</th>
                            <th>Mennyiség</th>
                            <th>Összeg</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map( (item, idx) => {
                            totalCartPrice += item.product.selling_price * item.product_quantity;
                            return (
                                <tr key={idx}>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.selling_price} -Ft</td>
                                    <td>{item.product_quantity}</td>
                                    <td>{item.product.selling_price * item.product_quantity} -Ft</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="2" className="text-end fw-bold">Teljes összeg</td>
                            <td colSpan="2" className="text-end fw-bold">{totalCartPrice} -Ft</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
        </div>
    }
    else
    {
        checkout_HTML = <div>
            <div className="card card-body py-5 text-center shadow-sm">
                <h4>Az Ön kosara üres. Ön a Pénztár oldalon van.</h4>
            </div>
        </div>
    }

    return (
        <div>

            
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Home / Pénztár</h6>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                   {checkout_HTML}
                </div>
            </div>

        </div>
    )
}

export default Checkout;