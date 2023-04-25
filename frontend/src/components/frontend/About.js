/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, } from "react-router-dom"
import pizza01 from './img/pizza01.jpg';
import pizza02 from './img/pizza02.jpg';
import pizza03 from './img/pizza03.jpg';
import pizza04 from './img/pizza04.jpg';
import pizza05 from './img/pizza05.jpg';
import pizza06 from './img/pizza06.jpg';
function About() {

    return (
        <section id="erdekessegek">
        <h3 className="text-bg-success p-2 col-sm-12 text-center">
          Érdekességek
        </h3>
        <div className="row mx-0">
          <div className="bg-info-subtle col-sm-12 col-md-6 p-3">
            <h3 className="bg-warning p-2 col-sm-12 text-center">
            Chicagoi pizza
            </h3>
            <div className="row">
              <img className="col-sm-4" src={pizza01} alt="Chicagoi pizza" title="Chicagoi pizza" />
              <div className="col-sm-8">
              <p>A chicagoi változat áll talán legtávolabb a magyar ízléstől, hiszen az autentikus gyakorlatilag jobban hasonlít a pitére, mint egy pizzára, hiszen rendkívül vastag tésztával készül. Ugyanakkor maga a tészta könnyed és vékony, a vastagságot a magas falú serpenyő adja, amiben hagyomány szerint készül, ez az úgynevezett „deep dish”.</p>
              </div>
              
            </div>
            <Link to="/pizza/Chicago-Style_Stuffed_Pizza/Chicago-Style_Stuffed_Pizza"  className="btn btn-warning">Rendelés</Link>
          </div>
          <div className="bg-info-subtle col-sm-12 col-md-6 p-3">
            <h3 className="bg-warning p-2 col-sm-12 text-center">
            Szicíliai pizza
            </h3>
            <div className="row">
              <img className="col-sm-4" src={pizza02} alt=" Szicíliai pizza" title=" Szicíliai pizza" />
              <div className="col-sm-8">
              <p>De létezik görög pizza is. Ennek sokkal olajosabb a tésztája, de nem annyira vastag, mint a chicagoi változaté. Általában kevesebb a sajt, mint a szósz, érthető okból előszeretettel használják a fetát, lilahagymát, illetve az olívabogyót feltétként.</p>
              </div>
            </div>
            <Link to="/pizza/Sicilian%20pizza/Sicilian%20pizza" className="btn btn-warning">Rendelés</Link>
          </div>
          <h3 className="bg-success p-2 col-sm-12 text-white text-center">
            Legnépszerűbb pizzák
          </h3>
          {/*  New York-i pizza */}
          <div className="bg-info-subtle col-sm-12 col-md-6 p-3">
            <h3 className="bg-info p-2 col-sm-12 text-center">
              New York-i pizza
            </h3>
            <div className="row">
              <img className="col-sm-4" src={pizza03} alt="New York-i pizza" title=" New York-i pizza" />
              <div className="col-sm-8">
              <p>Az egyik jellegzetesség a vékony tészta, amiről mindig elárulják a mesterek, hogy 1-2 napig is kelesztik, méghozzá hűtőben. Sütésnél nagyon fontos, hogy jól előmelegítsük a sütőt és pizzakövön süljön a csoda, 5 perc bőven elég neki, nem szabad tovább bent maradnia, mert akkor nagyon száraz lesz.</p>
              </div>
            </div>
            <Link to="/pizza/NewYork%20pizza/NewYork%20pizza" className="btn btn-warning">Rendelés</Link>
          </div>
          {/*  California pizza */}
          <div className="bg-info-subtle col-sm-12 col-md-6 p-3">
            <h3 className="bg-info p-2 col-sm-12 text-center">
            California pizza
            </h3>
            <div className="row">
              <img className="col-sm-4" src={pizza04} alt=" California pizza" title=" California pizza" />
              <div className="col-sm-8">
              <p>A kaliforniai stílusú pizza más néven California pizza  egy olyan pizzastílus , amely a New York-i és az olasz vékony héjat ötvözi a kaliforniai konyha főzési stílusából származó feltétekkel. Feltalálását általában Ed LaDou séfnek és Chez Panisse-nek tulajdonítják a kaliforniai Berkeleyben. </p>
              </div>
            </div>
            <Link to="/pizza/California_club_pizza/California_club_pizza" className="btn btn-warning">Rendelés</Link>
          </div>
           {/* Jumbo szelet */}
          <div className="bg-info-subtle col-sm-12 col-md-6 p-3">
            <h3 className="bg-info p-2 col-sm-12 text-center">
            Jumbo szelet
            </h3>
            <div className="row">
              <img className="col-sm-4" src={pizza05} alt="Jumbo szelet" title="Jumbo szelet" />
              <div className="col-sm-8">
              <p>A jumbo szelet egy túlméretezett New York-i stílusú pizza , amelyet szeletenként árulnak, különösen népszerű Washington DC Adams Morgan negyedében . A kör alakú pizzapite, amelyből jumbo szeleteket vágnak, akár 90 cm-es is lehet. átmérőjű, és az egyes szeletek 30 cm-nél hosszabbak lehetnek. </p>
              </div>
            </div>
            <Link to="/pizza/Adams_Morgan_Jumbo_Slice/Adams_Morgan_Jumbo_Slice" className="btn btn-warning">Rendelés</Link>
          </div>
         
          
           {/*Rántott pizza */}
           <div className="bg-info-subtle col-sm-12 col-md-6 p-3">
            <h3 className="bg-info p-2 col-sm-12 text-center">
            Rántott pizza
            </h3>
            <div className="row">
              <img className="col-sm-4" src={pizza06} alt="Rántott pizza" title="Rántott pizza" />
              <div className="col-sm-8">
              <p>A rántott pizza egy pizzából álló étel , amelyet ahelyett, hogy sütőben sütött volna, rántják , ami más ízt és táplálkozási profilt eredményez. Ez a technika Skóciában és Olaszországban is ismert , de számos különbség van a skót és az olasz változat között, amelyek valószínűleg egymástól függetlenül fejlődtek ki. </p>
              </div>
            </div>
            <Link to="/pizza/Deep%20Fried%20Pizza/Deep%20Fried%20Pizza" className="btn btn-warning">Rendelés</Link>
          </div>
         
        </div>
      </section>
      

    );

}

export default About;