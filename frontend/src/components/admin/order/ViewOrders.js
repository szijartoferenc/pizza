import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ViewOrders()
{
    const [loading, setLoading] = useState(true);
    const [orderitem, setOrderitem] = useState([]);
    useEffect(() => {

        let isMounted = true;
        document.title = "Termékek";

        axios.get(`/api/admin/view-orders`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setOrderitem(res.data.orderitem);
                    setLoading(false);
                }
            }
        });
        return () => {
            isMounted = false
        };
    }, []);

   
    var display_orderitem = "";
    if(loading)
    {
        return <h4>Megrendelések betöltése...</h4>
    }
    else
    {
        display_orderitem = orderitem.map( (item) => {
            
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.order_id}</td>
                    <td>{item.product.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    {/* <td>{item.email}</td> */}
                    <td>
                        <Link to={`/admin/orders`} className="btn btn-danger btn-sm">Visszalépés</Link>
                    </td>
                   
                </tr>
            )
        });
    }

    return (
        <div className="container px-4 mt-3">
        <div className="card">
            <div className="card-header">
                <h4>Megrendelések  </h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Megrendelés szám</th>
                                <th>Termék azonosító</th>
                                <th>Mennyiség</th>
                                <th>Ár</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {display_orderitem}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )

}

export default ViewOrders;

