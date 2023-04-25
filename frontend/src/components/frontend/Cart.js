/* eslint-disable no-unreachable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory,Link} from "react-router-dom";
import swal from "sweetalert";

function Cart()
{
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;

    if(!localStorage.getItem('auth_token')) {
        history.push("/");
        swal("Warning", "Jelentkezzen be a vásárláshoz!","error");
    }

    useEffect(() =>{
        let isMounted = true;
       
        // const category_slug = props.match.params.category;
        // const product_slug = props.match.params.product;
        axios.get(`/api/cart`).then(res=>{
               if(isMounted )
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
       
           return () =>{
           isMounted = false
           };
       
        },[history]);

        //Mennyiség növelése csökkentése

        const handleDecrement = (cart_id)=>{
            setCart(cart =>
                cart.map((item)=>
                    cart_id === item.id ? {...item, product_quantity: item.product_quantity - (item.product_quantity > 1 ? 1:0)} : item
                )
                );
                updateCartQuantity(cart_id,"dec")
        }

        const handleIncrement = (cart_id)=> {
            setCart(cart =>
                cart.map((item)=>
                    cart_id === item.id ? {...item, product_quantity: item.product_quantity + (item.product_quantity < 10 ? 1:0)} : item
                )
               
                );
                updateCartQuantity(cart_id,"inc")

        }

        function updateCartQuantity(cart_id, scope) {
            axios.put(`/api/cart-updatequantity/${cart_id}/${scope}`).then(res=>{
                if(res.data.status === 200) {
                    swal("Success", res.data.message,"success");
                }

            });
            
        }

        const deleteCartItem = (e, cart_id)=> {
            e.preventDefault();

            const thisClicked = e.currentTarget;
            thisClicked.innerText="Törlés folyamatban";

            axios.delete(`/api/delete-cartitem/${cart_id}`).then(res => {
                if(res.data.status === 200)
                {
                    swal("Success", res.data.message,"success");
                    thisClicked.closest("tr").remove();
                }
                else if (res.data.status === 404)
                {
                    swal("Error", res.data.message,"error");
                    thisClicked.innerText= "Remove";
                }

            });

        }

        if(loading)
        {
           return <h4>Kosár részletek betöltése...</h4>
        }

        var cart_HTML='';
        if (cart.length > 0) 
        {
            cart_HTML= <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Kép</th>
                                        <th>Termék</th>
                                        <th className="text-center">Ár</th>
                                        <th className="text-center">Mennyiség</th>
                                        <th className="text-center">Összesen</th>
                                        <th>Törlés</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, idx)=>{
                                        totalCartPrice += item.product.selling_price * item.product_quantity;

                                        return ( 
                                                                            
                                        <tr key={idx}>
                                            <td width="10%">
                                                <img src={`http://127.0.0.1:8000/${item.product.image}`} alt={item.product.name} width="50px" height="50px"/>

                                            </td>
                                            <td>{item.product.name}</td>
                                            <td width="15%" className="text-center">{item.product.selling_price} -Ft</td>
                                            <td width="15%">
                                                <div className="input-group">
                                                    <button type="button"  onClick={()=>handleDecrement(item.id)} className="input-group-text">-</button>
                                                    <div className="form-control text-center">{item.product_quantity}</div>
                                                    <button type="button"  onClick={()=>handleIncrement(item.id)} className="input-group-text">+</button>
                                                </div>
                                            </td>
                                            <td width="15%" className="text-center">{item.product.selling_price * item.product_quantity}</td>
                                            <td  width="10%">
                                                <button type="button" onClick={(e)=> deleteCartItem(e, item.id)} className="btn btn-danger btn-sm">Törlés</button>
                                            </td>
                                        </tr>
                                      )
                                    })}
                                </tbody>

                            </table>
                           
                        </div>
        }
        else
        {
           cart_HTML= <div>
                <div className="card card-body py-5 text-center shadow-sm">
                    <h6> A kosár üres</h6>
                </div>
            </div>
        }


        return (
            <div>
                <div className="py-3 bg-warning">
                    <div className="container">
                        <h6>Home /Kosár</h6>
                    </div>
                </div>

                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                              
                              {cart_HTML}

                            </div>
                            <div className="col-md-8"></div>
                            <div className="col-md-4">
                                    <div className="card card-body mt-3">
                                            <h4>Részösszeg:
                                                <span className="float-end">{totalCartPrice} -Ft</span>
                                            </h4>
                                            <h4>Teljes összeg:
                                                <span className="float-end">{totalCartPrice} -Ft</span>
                                            </h4>
                                            <hr />
                                            <Link to="/checkout" className="btn btn-primary">Pénztár</Link>
                                    </div>
                            </div>

                         
                        </div>
                  </div>
             </div>




            </div>
        
        )   





}














export default Cart;