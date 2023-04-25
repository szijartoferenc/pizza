import React from 'react'
import { Link, } from "react-router-dom"
import slider1 from './img/slider/slider1.jpg';
import slider2 from './img/slider/slider2.jpg';
import slider3 from './img/slider/slider3.jpg';
import slider4 from './img/slider/slider4.jpg';
import slider5 from './img/slider/slider5.jpg';
import slider6 from './img/slider/slider6.jpg';
import slider7 from './img/slider/slider7.jpg';
import slider8 from './img/slider/slider8.jpg';
import support01 from './img/support01.jpg';
import support02 from './img/support02.jpg';
import support03 from './img/support03.jpg';
import support04 from './img/support04.jpg';
import support05 from './img/support05.jpg';
import support06 from './img/support06.jpg';
import support07 from './img/support07.jpg';
import support08 from './img/support08.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import service01 from './img/service01.png';
import service02 from './img/service02.png';
import service03 from './img/service03.png';
import restaurant from './img/restaurant.jpg'
import './styles/home.css';

function Home() {

    return (
      <><><><><>
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={3}
        aria-label="Slide 4"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={4}
        aria-label="Slide 5"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={5}
        aria-label="Slide 6"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={6}
        aria-label="Slide 7"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={7}
        aria-label="Slide 8"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={slider1}
          className="d-block w-100"
          alt=""
        />
        <div className="carousel-caption">
          <h5>Pizza egy hosszú nap után</h5>
          <Link to="/pizza" target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider2} className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>Csak egy pizza kell és egy álom</h5>
          <Link to="/pizza" target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider3} className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>A mosógépek tovább élnek a pizzával</h5>
          <Link to="/pizza" target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider4} className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>Pizza egy név egy legenda</h5>
          <Link to="/pizza" target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider5} className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>Bocsánat, van egy szelet pizzád?</h5>
          <Link to="/pizza" target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider6} className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>Oszd meg életed pizzáját!</h5>
          <Link to="/pizza" target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src={slider7}
          className="d-block w-100"
          alt=""
        />
        <div className="carousel-caption">
          <h5>A pizza egy soha véget nem érő történet</h5>
          <Link to="/pizza"  target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider8} className="d-block w-100" alt="" />
        <div className="carousel-caption">
          <h5>Egyszerű, páratlan pizza</h5>
          <Link to="/pizza"  target="_blank" className="btn btn-warning">Rendelés</Link>
        </div>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</>


        <section id="about" className="about-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="about-img">
                  <img src={restaurant} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                <div className="about-text">
                  <h2>Éttermünk története</h2>
                  <p>Vestibulum sed odio sit amet ligula feugiat varius non id mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque at luctus elit. Proin vitae felis at turpis porttitor tempor non nec ligula. Integer sem lacus, dapibus non sollicitudin id, dignissim ac justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quam massa, mollis ut pellentesque sit amet, vehicula eu metus. Duis urna diam, consectetur eget sodales et, egestas eget lorem. Pellentesque tincidunt aliquet lorem vel suscipit. Praesent nisi purus, sollicitudin sed ante ut, faucibus placerat ipsum. Curabitur eros magna, sagittis nec felis nec, fringilla scelerisque nisl.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      
      <section id="home" className="home section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-5">
                  <h2>Érdekességek</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                <FontAwesomeIcon icon={faPizzaSlice} size="lg"/>
                  <h3 className="card-title"> Chicagoi pizza</h3>
                  <p className="lead">A chicagoi változat áll talán legtávolabb a magyar ízléstől, hiszen az autentikus gyakorlatilag jobban hasonlít a pitére, mint egy pizzára, hiszen rendkívül vastag tésztával készül.</p>
                  <Link to="/about" target="_blank" className="btn btn-warning">Olvasson tovább</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                <FontAwesomeIcon icon={faPizzaSlice} size="lg"/>
                  <h3 className="card-title"> Szicíliai pizza</h3>
                  <p className="lead">A chicagoi változat áll talán legtávolabb a magyar ízléstől, hiszen az autentikus gyakorlatilag jobban hasonlít a pitére, mint egy pizzára, hiszen rendkívül vastag tésztával készül. </p>
                  <Link to="/about" target="_blank" className="btn btn-warning">Olvasson tovább</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <FontAwesomeIcon icon={faPizzaSlice} size="lg"/>
                  <h3 className="card-title"> New York-i pizza</h3>
                  <p className="lead">Különböző gasztrotémával foglalkozó műsorok nemegyszer megkísérelték megfejteni a titkot, mitől is olyan különleges textúrájú és ízű a New York-i pizza</p>
                  <Link to="/about" target="_blank" className="btn btn-warning">Olvasson tovább</Link>
                </div>
              </div>
            </div>
          </div></section>
          </>
          
          <div id="portfolio" className="portfolio section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-5">
                  <h2>Szolgáltatásaink</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg 4">
                <div className="card text-center bg-white pb-2">
                  <div className="card-body text-dark">
                    <div className="img-area mb-4">
                      <img src={service01} alt="" className="img-fluid" />
                    </div>
                    <p className="lead text-center"> GYORS KISZÁLLÍTÁS</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg 4">
                <div className="card text-center bg-white pb-2">
                  <div className="card-body text-dark">
                    <div className="img-area mb-4">
                      <img src={service02} alt="" className="img-fluid" />
                    </div>
                    <p className="lead text-center"> EREDETI RECEPTEK</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg 4">
                <div className="card text-center bg-white pb-2">
                  <div className="card-body text-dark">
                    <div className="img-area mb-4">
                      <img src={service03} alt="" className="img-fluid" />
                    </div>
                    <p className="lead text-center"> EGÉSZSÉGES ÉTELEK</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        
        <section id="support" className="support section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-5">
                  <h2>Vélemények</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support01} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Ernő</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support02} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Jenő</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support03} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Ödön</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support04} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Heléna</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support05} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Szeder</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support06} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Málna</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support07} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Bóbita</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col 12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={support08} alt="" className="img-fluid rounded-circle" />
                    <h3 className="card-title py-2">Andrej</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="socials">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg"  />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       

        </>

         
         
       


    );

}

export default Home;