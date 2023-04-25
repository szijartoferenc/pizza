import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory} from "react-router-dom";
import swal from "sweetalert";


function ProductDetail (props)
{
const history = useHistory();
const [loading, setLoading] = useState(true);
const [product, setProduct] = useState([]);
const [quantity, setQuantity]= useState(1);
// const [category, setCategory] = useState([]);
// eslint-disable-next-line
const productCount = product.length;
useEffect(() =>{
 let isMounted = true;

 const category_slug = props.match.params.category;
 const product_slug = props.match.params.product;
 
 axios.get(`/api/viewproductdetail/${category_slug}/${product_slug}`).then(res=>{
        if(isMounted )
        {
            if(res.data.status === 200)
            {
                setProduct(res.data.product);
                setLoading(false);
            }
            else if(res.data.status === 404)
            {
                history.push('/pizza');
                swal("Warning",res.data.message,"error");
            }


       }

    });

    return () =>{
    isMounted = false
    };

 },[props.match.params.category, props.match.params.product,props.match.params.attribute, props.match.params.attributevalue, history]);
    
// Mennyiség emelése vagy csökkentése kezdet
 const handleDecrement = () => {
    if (quantity > 1) {
        setQuantity(prevCount => prevCount - 1)
    }
    
 }
 const handleIncrement = () => {
    if (quantity < 10) {
        setQuantity(prevCount => prevCount + 1)
    }
   
 }
// Mennyiség emelése vagy csökkentése vége


// Kosár készítése

const SubmitAddtocart = (e) => {
    e.preventDefault();

    const data = {
        product_id: product.id,
        product_quantity:quantity,
        

        
    }

    axios.post(`/api/add-to-cart`, data).then(res=>{
        if(res.data.status === 201){
            swal("Success",res.data.message,"success");
        }else if (res.data.status === 409)
        {   //már hozzá van adva a kosárhoz
            swal("Success",res.data.message,"success");
        }else if (res.data.status === 401)
        {
            swal("Error",res.data.message,"error");
        }else if (res.data.status === 404)
        {
            swal("Warning",res.data.message,"warning");
        }


    });


}

 if(loading)
 {
    return <h4>Termék részletek betöltése...</h4>
 }
 else
 {
    var avail_stock = '';
   if(product.quantity > 0)
   { 
    avail_stock=<div>

        <label className="btn-sm btn-success px-4 mt-2">Elérhető</label>

        <div className="row">
            <div className="col-md-3 mt-3">
            <div className="input-group">
                <button type="button" onClick={handleDecrement} className="input-group-text">-</button>
            {/* <input type="text"  /> */}
            <div className="form-control text-center">{quantity}</div>
                <button type="button" onClick={handleIncrement} className="input-group-text">+</button>
            </div>

            </div>
                <div className="col-md-3 mt-3">
                <button type="button" className="btn btn-primary w-100" onClick={SubmitAddtocart}>Hozzáadás kosárhoz</button>

            </div>


        </div>

    </div>
   }  

   else
   {
   
    avail_stock=<div>
    <label className="btn-sm btn-danger px-4 mt-2">Nem elérhető</label>
    </div>
   }
    
    

 }

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Pizza /{product.category.name} /{product.name}</h6>
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                            <div className="col-md-4 border-end">
                            <img src={`http://127.0.0.1:8000/${product.image}`} alt={product.name} className="w-100" />
                            </div>

                                <div className="col-md-8">
                                    <h4>
                                        {product.name}
                                        <span className="float-end badge btn-sm btn-danger badge-pil">{product.brand}</span>
                                    </h4>
                                    <p>{product.description}</p>
                                    <h4 className="mb-1">
                                    {product.selling_price} -Ft
                                        <s className="ms-2"> {product.original_price} -Ft</s>

                                    </h4>
                                    <div>
                                    {avail_stock}
                                    </div>
                                    {/* <button type="button" className="btn btn-danger mt-3">Kivánságlisához</button> */}

                                
                            </div>

                        
                    </div>
                  
                </div>
            </div>

        </div>

    );
   
}

export default ProductDetail;