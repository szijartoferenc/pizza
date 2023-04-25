import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Attributevalue() {

    const [attributelist, setAttributelist]= useState();
    const [attributevalueInput, setAttributevalue] = useState({

        attribute_id:'',
        slug:'',
        name:'',
        status:'',

    });

    // const [picture, setPicture]=useState(null);
    const [errorList, setError]=useState([]);

    const handleInput = (e) =>{
        e.persist();
        setAttributevalue({...attributevalueInput,[e.target.name]:e.target.value});
    }

    // const handleImage =(e) => {
    //     setPicture(e.target.files[0]);
    // }

    useEffect(()=> {
        
        axios.get(`/api/all-attribute`).then(res=> {
            if(res.data.status === 200)
            {
                setAttributelist(res.data.attribute);
            }

        });

        

    }, []);

    const submitAttributevalue = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        // formData.append('image', picture);
        formData.append('attribute_id', attributevalueInput.attribute_id);
        formData.append('slug', attributevalueInput.slug);
        formData.append('name', attributevalueInput.name);
        // formData.append('description', productInput.description);

        // formData.append('meta_title', productInput.meta_title);
        // formData.append('meta_keyword', productInput.meta_keyword);
        // formData.append('meta_description',productInput.description);

        // formData.append('selling_price', productInput.selling_price);
        // formData.append('original_price',productInput.original_price);
        // formData.append('quantity', productInput.quantity);
        // formData.append('brand', productInput.brand);
        // formData.append('featured', productInput.featured);
        // formData.append('popular', productInput.popular);
        formData.append('status', attributevalueInput.status);



        axios.post(`/api/store-attributevalue`, formData,{
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=> {
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setAttributevalue({...attributevalueInput,

                    attribute_id:'',
                    slug:'',
                    name:'',
                    status:'',
            
                });

                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("Minden mező kitöltése kötelező!","","error");
                setError(res.data.errors);
            }
            window.location.reload(false);
        });
    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Attributum érték hozzáadása
                        <Link to="admin/view-attributevalue" className="btn btn-primary btn-sm float-end">Attributum érték megtekintése</Link>
                    </h4>
                </div>
                <div className="card-body">
                <form onSubmit={submitAttributevalue} encType="multipart/form-data">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                        </li>
                        {/* <li className="nav-item" role="presentation">
                            <button className="nav-link" id="seo-tab" data-bs-toggle="tab" data-bs-target="#seo-tab-pane" type="button" role="tab" aria-controls="seo-tab-pane" aria-selected="false">SEO tags</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails-tab-pane" type="button" role="tab" aria-controls="otherdetails-tab-pane" aria-selected="false">Egyéb részletek</button>
                        </li> */}
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane card-body border fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
                           <div className="form-group mb-3">
                           <label>Attributum választása</label>
                           <select name="attribute_id" onChange={handleInput} value={attributevalueInput.category_id} className="form-control">
                                <option>Attributum választása</option>
                            {
                                attributelist?.map( (item) =>{
                                    return (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    )

                                })

                            }
                           
                           </select>
                            <small className="text-danger">{errorList.attribute_id}</small>
                           </div>
                        
                           <div className="form-group mb-3">
                           <label>Slug</label>
                           <input type="text" name="slug" onChange={handleInput} value={attributevalueInput.slug} className="form-control" />
                           <small className="text-danger">{errorList.slug}</small>
                           </div>

                           <div className="form-group mb-3">
                           <label>Név</label>
                           <input type="text" name="name" onChange={handleInput} value={attributevalueInput.name} className="form-control" />
                           <small className="text-danger">{errorList.name}</small>
                           </div>

                           <div className="col-md-4 form-group mb-3">
                           <label>Állapot(ellenőrizve-rejtve)</label>
                           <input type="checkbox" name="status" onChange={handleInput} value={attributevalueInput.status} className="w-50 h-50" />
                           </div>

                           {/* <div className="form-group mb-3">
                           <label>Név</label>
                           <input type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" />
                           <small className="text-danger">{errorList.name}</small>
                           </div>

                           <div className="form-group mb-3">
                           <label>Leírás</label>
                           <textarea name="description" onChange={handleInput} value={productInput.description} className="form-control"></textarea>
                           </div> */}

                         </div>
                        {/* <div className="tab-pane fade" id="seo-tab-pane" role="tabpanel" aria-labelledby="seo-tab">
                       
                           <div className="form-group mb-3">
                           <label>Meta cím</label>
                           <input type="text" name="meta_title" onChange={handleInput} value={productInput.meta_title} className="form-control" />
                           <small className="text-danger">{errorList.meta_title}</small>
                           </div>

                           <div className="form-group mb-3">
                           <label>Meta kulcsszó</label>
                           <textarea name="meta_keyword" onChange={handleInput} value={productInput.meta_keyword}  className="form-control"></textarea>
                           </div>

                           <div className="form-group mb-3">
                           <label>Meta leírás</label>
                           <textarea name="meta_description" onChange={handleInput} value={productInput.meta_description} className="form-control"></textarea>
                           </div>
                        </div> */}
                        {/* <div className="tab-pane fade" id="otherdetails-tab-pane" role="tabpanel" aria-labelledby="otherdetails-tab">
                           <div className="row">

                           <div className="col-md-4 form-group mb-3">
                           <label>Eladási ár</label>
                           <input type="text" name="selling_price" onChange={handleInput} value={productInput.selling_price} className="form-control" />
                           <small className="text-danger">{errorList.selling_price}</small>
                           </div>

                           <div className="col-md-4 form-group mb-3">
                           <label>Eredeti ár</label>
                           <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control" />
                           <small className="text-danger">{errorList.original_price}</small>
                           </div>

                           <div className="col-md-4 form-group mb-3">
                           <label>Mennyiség</label>
                           <input type="text" name="quantity" onChange={handleInput} value={productInput.quantity} className="form-control" />
                           <small className="text-danger">{errorList.quantity}</small>
                           </div>

                           <div className="col-md-4 form-group mb-3">
                           <label>Márka</label>
                           <input type="text" name="brand" onChange={handleInput} value={productInput.brand} className="form-control" />
                           <small className="text-danger">{errorList.brand}</small>
                           </div>

                           <div className="col-md-4 form-group mb-3">
                           <label>Kép</label>
                           <input type="file" name="image" onChange={handleImage}  className="form-control" />
                           <small className="text-danger">{errorList.image}</small>
                           </div>

                           <div className="col-md-4 form-group mb-3">
                           <label>Továbbiak(ellenőrizve-látható)</label>
                           <input type="checkbox" name="featured" onChange={handleInput} value={productInput.featured} className="w-50 h-50" />
                           </div>

                            <div className="col-md-4 form-group mb-3">
                           <label>Népszerűség(ellenőrizve-látható)</label>
                           <input type="checkbox" name="popular" onChange={handleInput} value={productInput.popular} className="w-50 h-50" />
                           </div>

                           

                           </div>
                        </div> */}
                        <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab">...</div>
                    </div>
                     <button type="submit" className="btn btn-primary px-4 mt-2">Küldés</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Attributevalue;