/* eslint-disable jsx-a11y/iframe-has-title */
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import swal from "sweetalert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faUtensils } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  
  const form = useRef();

   
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm('service_ds649do', 'template_8x46eqh', form.current, '6OCZsO41b0B8jPxtC')
        .then(
          () => {
            swal("Az üzenet sikeresen elküldve") 
            window.location.reload(false)
          },
          () => {
            swal("Sikertelen üzenetküldés. Próbálja újra!")
            
          }
          
        )
    }
  


  return (
    <>
        <section id="contact" className="contact section-padding">
          <div className="container">
          
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-5">
                <h1 className="px-1">
                            Keressen Bennünket!
                </h1>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-12 p-0 pt-4 pb-4 m-auto">
             
              <h3 className="text-center"><FontAwesomeIcon icon={faUtensils} size="lg"  /> Éttermünk Mintaváros központjában található  </h3> <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345152.0783264638!2d18.539459726299754!3d47.48016024082546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudapest!5e0!3m2!1shu!2shu!4v1682242057275!5m2!1shu!2shu" 
            width="99%" height="450" allowfullscreen="" loading="lazy" className='location'></iframe> <br/> <br/>
              <h4>
                <div className="card-body">
                  <ul className="card-body">
                              <li className="info"> <FontAwesomeIcon icon={faPizzaSlice} size="lg"  /> <b>Cím:</b> Minta utca 1, Mintaváros, Magyarország </li>
                              <li className="info"><FontAwesomeIcon icon={faPizzaSlice} size="lg"  /> <b>Telefonszám:</b> 661 895 XXX </li>
                              <li className="info"> <FontAwesomeIcon icon={faPizzaSlice} size="lg"  /> <b>Email:</b> info@deepdishpizza.eu </li>
                  </ul>
                </div>
              </h4>
               </div>
               
            </div>
          </div>

            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center pb-5">
                  <h2>Üzenet küldés</h2>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-12 p-0 pt-4 pb-4 m-auto">
                <form ref={form} onSubmit={sendEmail} className="bg-light p-4 m-auto">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input type="text" className="form-control" required placeholder="Teljes név" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input type="email" className="form-control" required placeholder="Email cím" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <textarea rows={3} className="form-control" placeholder="Üzenet" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-warning btn-lg btn-block mt-3">Küldés</button>
                </form></div>
              
            </div>
          </div>
        </section>
              
      
    </>
  )
}


export default Contact



