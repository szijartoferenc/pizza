import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditAttribute(props) {

  const history = useHistory();
  const [loading, setLoading] =useState(true);
  const [attributeInput, setAttribute] = useState([]);
  const [error, setError] = useState([]);

  useEffect(()=> {

    const attribute_id = props.match.params.id;
    axios.get(`/api/edit-attribute/${attribute_id}`).then(res=>{
      if(res.data.status === 200)
      {
        setAttribute(res.data.attribute);
      }
      else if(res.data.status === 404)
      {

        swal("Error",res.data.message,"error");
        history.push ('/admin/view-category');

      }
      setLoading(false);

    });


    },[props.match.params.id, history]);


  const handleInput = (e) => {
    e.persist();
    setAttribute({...attributeInput, [e.target.name]: e.target.value});
  }

  const updateAttribute = (e) => {
    e.preventDefault();

    const attribute_id = props.match.params.id;
    const data = attributeInput;
    axios.put(`/api/update-attribute/${attribute_id}`, data).then(res=> {
      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
        setError([]);
      }
      else if(res.data.status === 422)
      {
        swal("Minden mező kitöltése kötelező","","error");
        setError(res.data.errors);
      }
      else if(res.data.status === 404)
      {
        swal("Error",res.data.message,"error");
        history.push('admin/view-attribute');
      }
      

    });

  }
  
  if (loading)
  {
      return <h4>Feltöltés folyamatban...</h4>
  }


    return (
        <div className="container px-4">
        <div className="card mt-4">
          <div className="card-header">
          <h4>Attributum szerkesztése
          <Link to="/admin/add-attribute"className="btn btn-primary btn-sm float-end">Vissza</Link>
          </h4>
          </div>
          <div className="card-body">
          <form onSubmit={updateAttribute}>
       
       <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
         <li className="nav-item" role="presentation">
           <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
         </li>
         {/* <li className="nav-item" role="presentation">
           <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SEO tags</button>
         
         </li> */}
        
       </ul>
       <div className="tab-content" id="pills-tabContent">
       <div className="tab-pane card-body border fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
       <div className="form-group mb-3">
       <label>Slug</label>
       <input type="text" name="slug" onChange={handleInput} value={attributeInput.slug} className="form-control" />
       <small className="text-danger">{error.slug}</small>
       </div>
       
       <div className="form-group mb-3">
       <label>Név</label>
       <input type="text" name="name" onChange={handleInput} value={attributeInput.name} className="form-control" />
       <small className="text-danger">{error.name}</small>
       </div>
       
       {/* <div className="form-group mb-3">
       <label>Leírás</label>
       <textarea name="description" onChange={handleInput} value={attributeInput.description} className="form-control"></textarea>
       </div>
       
       <div className="form-group mb-3">
       <label>Állapot</label>
       <input type="checkbox" name="status" onChange={handleInput} value={attributeInput.status} />
       </div> */}
       
       </div>
       {/* <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
       <div className="form-group mb-3">
       <label>Meta cím</label>
       <input type="text" name="meta_title" onChange={handleInput} value={attributeInput.meta_title} className="form-control"></input>
       <small className="text-danger">{error.meta_title}</small>
       </div>
       
       <div className="form-group mb-3">
       <label>Meta kulcsszavak</label>
       <textarea name="meta_keyword" onChange={handleInput} value={attributeInput.meta_keyword} className="form-control"></textarea>
       </div>
       
       <div className="form-group mb-3">
       <label>Meta leírás</label>
       <textarea name="meta_description" onChange={handleInput} value={attributeInput.meta_description} className="form-control"></textarea>
       </div>
       
       </div> */}
         
       </div>
       
       <button type="submit" className="btn btn-primary px-4 float-end">Feltöltés</button>
   </form>

          </div>

        </div>
       

        </div>
    );

}

export default EditAttribute;