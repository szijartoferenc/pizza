import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditCategory(props) {

  const history = useHistory();
  const [loading, setLoading] =useState(true);
  const [categoryInput, setCategory] = useState([]);
  const [error, setError] = useState([]);

  useEffect(()=> {

    const category_id = props.match.params.id;
    axios.get(`/api/edit-category/${category_id}`).then(res=>{
      if(res.data.status === 200)
      {
        setCategory(res.data.category);
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
    setCategory({...categoryInput, [e.target.name]: e.target.value});
  }

  const updateCategory = (e) => {
    e.preventDefault();

    const category_id = props.match.params.id;
    const data = categoryInput;
    axios.put(`/api/update-category/${category_id}`, data).then(res=> {
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
        history.push('admin/view-category');
      }
      window.location.reload(false);

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
          <h4>Kategória szerkesztése
          <Link to="/admin/add-category" className="btn btn-primary btn-sm float-end">Vissza</Link>
          </h4>
          </div>
          <div className="card-body">
          <form onSubmit={updateCategory}>
       
       <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
         <li className="nav-item" role="presentation">
           <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
         </li>
         <li className="nav-item" role="presentation">
           <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SEO tags</button>
         
         </li>
        
       </ul>
       <div className="tab-content" id="pills-tabContent">
       <div className="tab-pane card-body border fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
       <div className="form-group mb-3">
       <label>Slug</label>
       <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />
       <small className="text-danger">{error.slug}</small>
       </div>
       
       <div className="form-group mb-3">
       <label>Név</label>
       <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
       <small className="text-danger">{error.name}</small>
       </div>
       
       <div className="form-group mb-3">
       <label>Leírás</label>
       <textarea name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
       </div>
       
       <div className="form-group mb-3">
       <label>Állapot</label>
       <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} />
       </div>
       
       </div>
       <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
       <div className="form-group mb-3">
       <label>Meta cím</label>
       <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control"></input>
       <small className="text-danger">{error.meta_title}</small>
       </div>
       
       <div className="form-group mb-3">
       <label>Meta kulcsszavak</label>
       <textarea name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keyword} className="form-control"></textarea>
       </div>
       
       <div className="form-group mb-3">
       <label>Meta leírás</label>
       <textarea name="meta_description" onChange={handleInput} value={categoryInput.meta_description} className="form-control"></textarea>
       </div>
       
       </div>
         
       </div>
       <button type="submit" className="btn btn-primary px-4 float-end">Feltöltés</button>
   </form>

          </div>

        </div>
       

        </div>
    );

}

export default EditCategory;