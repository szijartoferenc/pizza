/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function ViewProduct() {

    const [loading, setLoading] =useState(true);
    const [viewProduct, setProduct] = useState([]);

    useEffect(()=> {

        // console.log(res.data.category);
        document.title= "Terméklista";
        axios.get(`/api/view-product`).then(res=> {
                if(res.status === 200)
                {
                    setProduct(res.data.product)
                }
                setLoading(false);
        });

    }, []);

    // const deleteProduct= (e, id)=> {
    //     e.preventDefault();

    //     const thisClicked = e.currentTarget;
    //     thisClicked.innterText = "Törlés folyamatban";

    //     axios.delete(`/api/delete-product/${id}`).then(res=> {
    //         if(res.data.status === 200)
    //         {
    //             swal("Success", res.data.message,"success");
    //             thisClicked.closest("tr").remove();
    //         }
    //         else if(res.data.status === 404)
    //         {
    //             swal("Success", res.data.message,"success");
    //             thisClicked.innterText = "Törlés";
    //         }

    //     });
    // }

    var display_Productdata = '';
    if (loading)
    {
        return <h4>Az oldal töltödik...</h4>
    }
    else
    {
        var ProdStatus = '';
        display_Productdata=
        viewProduct?.map((item)=>{
            // eslint-disable-next-line
            if(item.status == '0')
            {
                ProdStatus='Mutatva';
                // eslint-disable-next-line
            }else if(item.status == '1'){
                ProdStatus = 'Rejtve';
            }



            return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.category.name}</td>
                <td>{item.name}</td>
                <td>{item.selling_price}</td>
                {/* <td>{item.image}</td> */}
                <td><img src={`http://127.0.0.1:8000/${item.image}`} width="50px" alt={item.name}/></td>
                
                <td>
                    <Link to={`edit-product/${item.id}`} className="btn btn-success btn-sm">Szerkesztés</Link>
                </td>
                <td>
                    {ProdStatus}
                </td>
                </tr>
            )

        });
    }
    

    return (
       <div className="container px-4">
           <div className="card mt-4">
            <div className="card-header">
                <h4> Termék lista
                <Link to="/admin/add-product"className="btn btn-primary btn-sm float-end">Termék hozzáadása</Link>
                </h4>
            </div>
            <div className="card-body">
            <table className="table table-bordered table-striped">
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Kategória név</th>
                    <th>Termék név</th>
                    <th>Eladási ár</th>
                    <th>Kép</th>
                    <th>Szerkesztés</th>
                    <th>Törlés</th>
                </tr>
             </thead>
             <tbody>
                {display_Productdata}
             </tbody>

            </table>

            </div>
           </div>
       </div>
    );

}

export default ViewProduct;