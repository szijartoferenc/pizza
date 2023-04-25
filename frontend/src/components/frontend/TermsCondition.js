/* eslint-disable no-unused-vars */
import { faDoorClosed, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';



function TermsCondition() {

    var g = window.g || {};
  const history = useHistory();
  const LogoutSubmit = (e) =>{
  e.preventDefault();
 
  axios.post(`/api/logout`).then(res => {
    if(res.data.status === 200) 
    {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal("Success",res.data.message,"success");
        history.push('/');
    }
  });

}

var AuthButtons = '';
if(!localStorage.getItem('auth_token'))
{
  AuthButtons = (

    <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="btn btn-danger center" to="/"><FontAwesomeIcon icon={faDoorClosed} size="lg" /> Vissza</Link>
      </li>

      {/* <li className="nav-item">
        <Link className="nav-link" to="/register">Regisztráció</Link>
      </li> */}
    </ul>

  )
}
else
{
  AuthButtons = (
     
   
      <button type="button" onClick={LogoutSubmit}  className="btn btn-danger"><FontAwesomeIcon icon={faDoorClosed} size="lg" />Kijelentkezés</button>
     

  )
} 


    return (

        <section id="privacypolicy">
          <h2 className="bg-success p-2 col-sm-12 text-center">
          <FontAwesomeIcon icon={faUserSecret} size="lg"/> Általános Szerződési Feltételek
          </h2>
          <article>
            <p>Jelen dokumentum nem kerül iktatásra (utólag nem hozzáférhető), kizárólag elektronikus formában kerül megkötésre, nem minősül írásbeli szerződésnek, magyar nyelven íródik,
            magatartási kódexre nem utal. A webshop működésével, megrendelési, és szállítási folyamatával
            kapcsolatosan felmerülő kérdések esetén a megadott elérhetőségeinken rendelkezésére állunk. 
          </p>
            <p> Szolgáltató fenntart magának minden jogot a weboldal, annak bármely részlete és az azon megjelenő tartalmak, valamint a weboldal terjesztésének tekintetében. Tilos a
              weboldalon megjelenő tartalmak vagy azok bármely részletének letöltése, elektronikus tárolása, feldolgozása és értékesítése a Szolgáltató írásos hozzájárulása
              nélkül. <br />
            </p>
            <h2 className="bg-success p-2 col-sm-12 text-center">
          <FontAwesomeIcon icon={faUserSecret} size="lg"/> A MEGRENDELÉSEK FELDOLGOZÁSA ÉS TELJESÍTÉS
          </h2>
          <p>Jelen Szabályzat szempontjából adatfeldolgozó a Deep Dish Pizza Társaság. z adatfeldolgozónak a személyes adatok feldolgozásával kapcsolatos jogait és kötelezettségeit az adatkezelő határozza meg. Az adatkezelési műveletekre vonatkozó utasítások jogszerűségéért az adatkezelő felel. Az adatfeldolgozó tevékenységi körén belül, illetőleg az adatkezelő által meghatározott keretek között felelős a személyes adatok feldolgozásáért, megváltoztatásáért, törléséért, továbbításáért és nyilvánosságra hozataláért. Az adatfeldolgozó tevékenységének ellátása során más adatfeldolgozót nem vehet igénybe. Az adatfeldolgozó az adatkezelést érintő érdemi döntést nem hozhat, a tudomására jutott személyes adatokat kizárólag az adatkezelő rendelkezései szerint dolgozhatja fel, saját céljára adatfeldolgozást nem végezhet, továbbá a személyes adatokat az adatkezelő rendelkezései szerint köteles tárolni és megőrizni.<br /></p>
            <h3 className="bg-success p-2 col-sm-12 text-center">
          <FontAwesomeIcon icon={faUserSecret} size="lg"/> ELÁLLÁS JOGA
          </h3>
           <p>Az Európai Parlament és a Tanács 2011/83/EU számú irányelvének, továbbá a
            fogyasztó és a vállalkozás közötti szerződések részletes szabályairól szóló 45/2014.
            (II.26.) Korm. rendelet szabályozása értelmében Fogyasztó a megrendelt termék
            kézhez vételétől számított 14 napon belül indokolás nélkül elállhat a szerződéstől,
            visszaküldheti a megrendelt terméket. Jelen tájékoztató hiányában jogosult
            Fogyasztó 1 év elteltéig gyakorolni az elállási jogát. Ha a Szolgáltató a termék
            kézhezvételének vagy a szerződés megkötésének napjától számított 14 nap lejártát
            követően, de 12 hónapon belül megadja a tájékoztatást, úgy az elállásra nyitva álló
            határidő e tájékoztatás közlésétől számított 14 nap.  </p>
         
          </article>
          {AuthButtons }
        </section>
      );

}

export default TermsCondition;