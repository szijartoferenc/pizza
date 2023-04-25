/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function ViewAttributevalue() {

    const [loading, setLoading] =useState(true);
    const [viewAttributevalue, setAttributevalue] = useState([]);

    useEffect(()=> {

        // console.log(res.data.category);
        document.title= "Attributumlista";
        axios.get(`/api/view-attributevalue`).then(res=> {
                if(res.status === 200)
                {
                    setAttributevalue(res.data.attributevalue)
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

    var display_Attributevaluedata = '';
    if (loading)
    {
        return <h4>Az oldal töltödik...</h4>
    }
    else
    {
        var AttributevalueStatus = '';
        display_Attributevaluedata=
        viewAttributevalue?.map((item)=>{
            // eslint-disable-next-line
            if(item.status == '0')
            {
                AttributevalueStatus='Mutatva';
                // eslint-disable-next-line
            }else if(item.status == '1'){
                AttributevalueStatus = 'Rejtve';
            }



            return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.attribute.name}</td>
                <td>{item.name}</td>
                {/* <td>{item.selling_price}</td> */}
                {/* <td>{item.image}</td> */}
                {/* <td><img src={`http://127.0.0.1:8000/${item.image}`} width="50px" alt={item.name}/></td> */}
                
                <td>
                    <Link to={`edit-attributevalue/${item.id}`} className="btn btn-success btn-sm">Szerkesztés</Link>
                </td>
                <td>
                    {display_Attributevaluedata}
                </td>
                </tr>
            )

        });
    }
    

    return (
       <div className="container px-4">
           <div className="card mt-4">
            <div className="card-header">
                <h4> Attributum lista
                <Link to="/admin/add-attributevalue"className="btn btn-primary btn-sm float-end">Attributum hozzáadása</Link>
                </h4>
            </div>
            <div className="card-body">
            <table className="table table-bordered table-striped">
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Attributum név</th>
                    <th>Attributum érték</th>
                    {/* <th>Eladási ár</th>
                    <th>Kép</th> */}
                    <th>Szerkesztés</th>
                    <th>Törlés</th>
                </tr>
             </thead>
             <tbody>
                {display_Attributevaluedata}
             </tbody>

            </table>

            </div>
           </div>
       </div>
    );

}

export default ViewAttributevalue;