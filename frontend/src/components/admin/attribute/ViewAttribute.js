/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function ViewAttribute() {

    const [loading, setLoading] =useState(true);
    const [attributeList, setAttributeList] = useState([]);

    useEffect(()=> {
        // console.log(res.data.category);
        axios.get(`/api/view-attribute`).then(res=> {
                if(res.status === 200)
                {
                    setAttributeList(res.data.attribute)
                }
                setLoading(false);
        });

    }, []);

    const deleteAttribute = (e, id)=> {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innterText = "Törlés folyamatban";

        axios.delete(`/api/delete-attribute/${id}`).then(res=> {
            if(res.data.status === 200)
            {
                swal("Success", res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal("Success", res.data.message,"success");
                thisClicked.innterText = "Törlés";
            }

        });
    }

    let viewattribute_HTMLTABLE = "";
    if (loading)
    {
        return <h4>Az oldal töltödik...</h4>
    }
    else
    {
        viewattribute_HTMLTABLE=
        attributeList.map((item)=>{
            return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.slug}</td>
                <td>{item.status}</td>
                <td>
                    <Link to={`edit-attribute/${item.id}`} className="btn btn-success btn-sm">Szerkesztés</Link>
                </td>
                <td>
                    <button type="button" onClick={(e) => deleteAttribute(e, item.id)} className="btn btn-danger btn-sm">Törlés</button>
                </td>
                </tr>
            )

        });
    }
    

    return (
       <div className="container px-4">
           <div className="card mt-4">
            <div className="card-header">
                <h4> Kategória lista
                <Link to="/admin/add-attribute"className="btn btn-primary btn-sm float-end">Kategória hozzáadása</Link>
                </h4>
            </div>
            <div className="card-body">
            <table className="table table-bordered table-striped">
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Név</th>
                    <th>Slug</th>
                    <th>Állapot</th>
                    <th>Szerkesztés</th>
                    <th>Törlés</th>
                </tr>
             </thead>
             <tbody>
                { viewattribute_HTMLTABLE}
             </tbody>

            </table>

            </div>
           </div>
       </div>
    );

}

export default ViewAttribute;