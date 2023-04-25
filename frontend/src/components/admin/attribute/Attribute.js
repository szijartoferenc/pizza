import React, { useState } from 'react';
import axois from 'axios';
import swal from "sweetalert";
function Attribute() {
 
 const [attributeInput, setAttribute] = useState({
    slug:'',
    name: '',
    error_list: [],
 });

 const handleInput = (e) => {
    e.persist();
    setAttribute({...attributeInput,[e.target.name]:e.target.value})
 }

 const submitAttribute = (e) => {
    e.preventDefault();
    
    const data = {
        slug:attributeInput.slug,
        name:attributeInput.name,
       

    }
        axois.post('/api/store-attribute', data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                document.getElementById('ATTRIBUTE_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setAttribute({...attributeInput, error_list:res.data.errors});

            }
            window.location.reload(false);
        });
             
 }

 let display_errors = [];
  if(attributeInput.error_list)
  {
    display_errors = [
        attributeInput.error_list.slug,
        attributeInput.error_list.name,
        
    ]
    
  }

  //

return (
    <div className="container-fluid px-4">
        <h1 className="mt-4">Tulajdonság hozzáadása</h1>

       {
        
        display_errors.map((item, index)=>{
                return(<p className="mb-3" key={index}>{item}</p>)
            })


       }     
           
        
        <form onSubmit={submitAttribute}  id="ATTRIBUTE_FORM">
       
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
            <input type="text" name="slug" onChange={handleInput} value={attributeInput.slug} className="form-control" />
            <span>{attributeInput.error_list.slug}</span>
            </div>

            <div className="form-group mb-3">
            <label>Név</label>
            <input type="text" name="name" onChange={handleInput} value={attributeInput.name} className="form-control" />
            <span>{attributeInput.error_list.name}</span>
            </div>
                                  
            <div className="form-group mb-3">
            <label>Állapot</label>
            <input type="checkbox" name="status" onChange={handleInput} value={attributeInput.status} />
            </div>
            
            </div>
            {/* <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
            <div className="form-group mb-3">
            <label>Meta cím</label>
            <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control"></input>
            <span>{categoryInput.error_list.meta_title}</span>
            </div>
            
            <div className="form-group mb-3">
            <label>Meta kulcsszavak</label>
            <textarea name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keyword} className="form-control"></textarea>
            </div>
            
            <div className="form-group mb-3">
            <label>Meta leírás</label>
            <textarea name="meta_description" onChange={handleInput} value={categoryInput.meta_description} className="form-control"></textarea>
            </div>
            
            </div> */}
              
            </div>
            <button type="submit" className="btn btn-primary px-4 float-end">Rögzítés</button>
        </form>
</div>
);

}

export default Attribute;