import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ViewCategory()
{
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        let isMountered = true;

        axios.get(`/api/getCategory`).then(res=>{
            if(isMountered)
            {
                if(res.data.status === 200)
                {
                    // console.log(res.data.category);
                    setCategory(res.data.category);
                    setLoading(false);
                }
            }
        });

        return () => {
            isMountered = false;
        }
    }, []);

    if(loading)
    {
        return <h4>Kategória betöltése...</h4>
    }
    else
    {
        var showCategoryList = '';
        showCategoryList = category.map( (item, idx) => {
            return (
                <div className="col-md-4" key={idx}>
                    <div className="card">
                        <Link to={`pizza/${item.slug}`}>
                        <FontAwesomeIcon icon={faPizzaSlice} size="lg"/> 
                        </Link>
                        <div className="card-body">
                            <Link to={`pizza/${item.slug}`}>
                                <h5>{item.name}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    if(showCategoryList.length > 0)
    {
        return (
            <div>
                <div className="py-3 bg-warning">
                    <div className="container">
                        <h6>Kategória oldal</h6>
                    </div>
                </div>
                
                <div className="py-3">
                <div className="container">
                    <div className="row">
                        {showCategoryList}
                    </div>
                </div>
                </div>

            </div>
        )
    }
    else
    {
        return (
            <div>
                <div className="py-3 bg-warning">
                    <div className="container">
                        <h6>Kategória oldal</h6>
                    </div>
                </div>
                
                <div className="py-3">
                    <div className="container">
                        <h4>Nincs Kategória</h4>
                    </div>
                </div>

            </div>
        )
    }
}


export default ViewCategory;