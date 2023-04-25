import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Order()
{
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        let isMounted = true;
        document.title = "Megrendelések";

        axios.get(`/api/admin/orders`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setOrders(res.data.orders);
                    setLoading(false);
                }
            }
        });
        return () => {
            isMounted = false
        };
    }, []);

   
    var display_orders = "";
    if(loading)
    {
        return <h4>Megrendelések betöltése...</h4>
    }
    else
    {
        display_orders = orders?.map( (item) => {
            
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tracking_no}</td>
                    <td>{item.lastname}</td>
                    <td>{item.firstname}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                        <Link to={`view-orders`} className="btn btn-success btn-sm">Megtekintés</Link>
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
                                <th>Vezetéknév</th>
                                <th>Keresztnév</th>
                                <th>Telefonszám</th>
                                <th>Email cím</th>
                                <th>Esemény</th>
                            </tr>
                        </thead>
                        <tbody>
                            {display_orders}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )

}

export default Order;

