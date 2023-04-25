/* eslint-disable no-unused-vars */
import { faDoorClosed, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';



function PrivacyPolicy() {

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
          <FontAwesomeIcon icon={faUserSecret} size="lg"/> Adatkezelésre, adatfeldolgozásra vonatkozó szabályok:
          </h2>
          <article>
            <p>Személyes adat akkor kezelhető, ha ahhoz az érintett hozzájárul, vagy azt törvény vagy -  törvény felhatalmazása alapján, az abban meghatározott körben - helyi önkormányzat rendelete elrendeli. Az érintett megrendelő regisztrációja során megadott adatait, mint a szolgáltatást igénybe vevő azonosításához szükséges és elégséges azonosító adatokat a szolgáltató a 2001. évi CVIII. Tv. szerint, az információs társadalommal összefüggő szolgáltatás nyújtására irányuló szerződés létrehozása, tartalmának meghatározása, módosítása, teljesítésének figyelemmel kísérése, az abból származó ellenértékek számlázása, valamint az azzal kapcsolatos követelések érvényesítése céljából kezeli. Különleges adatot az Adatkezelő nem kezel.
          </p>
            <p> Törvény közérdekből - az adatok körének kifejezett megjelölésével - elrendelheti a személyes adat nyilvánosságra hozatalát. Minden egyéb esetben a nyilvánosságra hozatalhoz az érintett hozzájárulása, különleges adat esetében írásbeli hozzájárulása szükséges. Kétség esetén azt kell vélelmezni, hogy az érintett a hozzájárulását nem adta meg. Az érintett hozzájárulását megadottnak kell tekinteni az érintett közszereplése során általa közölt vagy a nyilvánosságra hozatal céljából általa átadott adatok tekintetében. Az érintett kérelmére indult eljárásban a szükséges adatainak kezeléséhez való hozzájárulását vélelmezni kell. Erre a tényre az érintett figyelmét fel kell hívni.. <br />
            </p>
            <h2 className="bg-success p-2 col-sm-12 text-center">
          <FontAwesomeIcon icon={faUserSecret} size="lg"/> Támogatás
          </h2>
          <p>Jelen Szabályzat szempontjából adatfeldolgozó a Deep Dish Pizza Társaság. z adatfeldolgozónak a személyes adatok feldolgozásával kapcsolatos jogait és kötelezettségeit az adatkezelő határozza meg. Az adatkezelési műveletekre vonatkozó utasítások jogszerűségéért az adatkezelő felel. Az adatfeldolgozó tevékenységi körén belül, illetőleg az adatkezelő által meghatározott keretek között felelős a személyes adatok feldolgozásáért, megváltoztatásáért, törléséért, továbbításáért és nyilvánosságra hozataláért. Az adatfeldolgozó tevékenységének ellátása során más adatfeldolgozót nem vehet igénybe. Az adatfeldolgozó az adatkezelést érintő érdemi döntést nem hozhat, a tudomására jutott személyes adatokat kizárólag az adatkezelő rendelkezései szerint dolgozhatja fel, saját céljára adatfeldolgozást nem végezhet, továbbá a személyes adatokat az adatkezelő rendelkezései szerint köteles tárolni és megőrizni.<br /></p>
            <h3 className="bg-success p-2 col-sm-12 text-center">
          <FontAwesomeIcon icon={faUserSecret} size="lg"/> Adatok
          </h3>
           <p>Az igénybe vevő regisztrálásával hozzájárulását adja ahhoz, hogy a szolgáltatóval együttműködő más szolgáltatók (továbbiakban: harmadik fél) részére adatait a szolgáltató átadja mindazon célra, amely célra az adatok kezelésére maga a szolgáltató is jogosult. Amennyiben a szolgáltató adatkezelési joga valamely cél tekintetében megszűnik, úgy erről a harmadik felet értesíti. Az adatkezelési jog megszűnése esetén a szolgáltató a szolgáltatást igénybe vevő adatait törli. A szolgáltató biztosítja, hogy az igénybe vevő az információs társadalommal összefüggő szolgáltatás igénybevétele előtt és az igénybevétel során bármikor megismerhesse, hogy a szolgáltató mely adatkezelési célokból mely adatfajtákat kezel.
          </p>
         
          </article>
          {AuthButtons }
        </section>
      );

}

export default PrivacyPolicy;