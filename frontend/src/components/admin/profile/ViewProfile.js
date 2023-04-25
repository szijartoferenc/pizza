/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function ViewProfile() {

    const [loading, setLoading] =useState(true);
    const [userList, setUserList] = useState([]);

    useEffect(()=> {
        // console.log(res.data.user);
        axios.get(`/api/view-profile`).then(res=> {
                if(res.status === 200)
                {
                    setUserList(res.data.user)
                }
                setLoading(false);
        });

    }, []);

    const deleteUser = (e, id)=> {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innterText = "Törlés folyamatban";

        axios.delete(`/api/delete-profile/${id}`).then(res=> {
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

    let viewuser_HTMLTABLE = "";
    if (loading)
    {
        return <h4>Az oldal töltödik...</h4>
    }
    
    else
    {
       var UserStatus = '';
        viewuser_HTMLTABLE=
        userList.map((item)=>{
            if(item.role_as == '0')
            {
                
                UserStatus='Felhasználó';
               
            }else if(item.role_as == '1'){
               
               UserStatus = 'Admin';
            }
            return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{UserStatus}</td>
                <td>
                    <Link to={`edit-profile/${item.id}`} className="btn btn-success btn-sm">Szerkesztés</Link>
                </td>
                <td>
                    <button type="button" onClick={(e) => deleteUser(e, item.id)} className="btn btn-danger btn-sm">Törlés</button>
                </td>
                </tr>
            )

        });
    }
    

    return (
       <div className="container px-4">
           <div className="card mt-4">
            <div className="card-header">
                <h4> Felhasználó lista
                <Link to="/admin/profile" className="btn btn-primary btn-sm float-end">Felhasználó hozzáadása</Link>
                </h4>
            </div>
            <div className="card-body">
            <table className="table table-bordered table-striped">
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Név</th>
                    <th>Email</th>
                    <th>Állapot</th>
                    <th>Szerkesztés</th>
                    <th>Törlés</th>
                </tr>
             </thead>
             <tbody>
                { viewuser_HTMLTABLE}
             </tbody>

            </table>

            </div>
           </div>
       </div>
    );

}

export default ViewProfile;