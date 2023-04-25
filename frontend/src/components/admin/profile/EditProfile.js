import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditProfile(props) {

  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [userInput, setUser] = useState([]);
  const [error, setError] = useState([]);

  const [allcheckbox, setCheckboxes] = useState([]);
  const handleCheckbox = (e) => {
    e.persist();
    setCheckboxes({ ...allcheckbox, [e.target.name]: e.target.checked });
  }

  useEffect(() => {
    //Felhasználó szerkesztése
    const user_id = props.match.params.id;
    axios.get(`/api/edit-profile/${user_id}`).then(res => {
      if (res.data.status === 200) {
        setUser(res.data.user);
        setCheckboxes(res.data.user)
      }
      else if (res.data.status === 404) {

        swal("Error", res.data.message, "error");
        history.push('/admin/view-profile');

      }
      setLoading(false);

    });


  }, [props.match.params.id, history]);


  const handleInput = (e) => {
    e.persist();
    setUser({ ...userInput, [e.target.name]: e.target.value });
  }

 //-----------------------------------------------------------------------------------------------

  //Felhasználó feltöltése
  const updateUser = (e) => {
    e.preventDefault();

    const user_id = props.match.params.id;
    const data = userInput;
    axios.put(`/api/update-profile/${user_id}`, data).then(res => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        setError([]);
      }
      else if (res.data.status === 422) {
        swal("Minden mező kitöltése kötelező", "", "error");
        setError(res.data.errors);
      }
      else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push('admin/view-profile');
      }
      window.location.reload(false);

    });

  }

  if (loading) {
    return <h4>Feltöltés folyamatban...</h4>
  }
//-----------------------------------------------------------------------------------------------
//Felhasználó feltöltése vére
  return (
    //Felhasználó feltöltése meggjelenítés
    <div className="container px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>Felhasználó szerkesztése
            <Link to="/admin/view-profile" className="btn btn-primary btn-sm float-end">Vissza</Link>
          </h4>
        </div>
        <div className="card-body">
          <form onSubmit={updateUser}>

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
                  <label>Név</label>
                  <input type="text" name="name" onChange={handleInput} value={userInput.name} className="form-control" />
                  <small className="text-danger">{error.name}</small>
                </div>

                <div className="form-group mb-3">
                  <label>Email</label>
                  <input type="text" name="email" onChange={handleInput} value={userInput.email} className="form-control" />
                  <small className="text-danger">{error.email}</small>
                </div>

                
                <div className="col-md-4 form-group mb-3">
                  <label>Szerepkör(ellenőrizve-rejtve)</label>
                  <input type="checkbox" name="role_as" onChange={handleCheckbox} defaultChecked={allcheckbox.role_as === 1 ? true : false} className="w-50 h-50" />
                </div>

              </div>


            </div>
            <button type="submit" className="btn btn-primary px-4 float-end">Feltöltés</button>
          </form>

        </div>

      </div>


    </div>
  );
 //-----------------------------------------------------------------------------------------------        
}

export default EditProfile;