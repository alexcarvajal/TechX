import React from 'react'
import Footer from '../../templates/Footer/Footer';
import { Monitoreo } from '../Monitoreo/Monitoreo';
export const DashboardDoctor = () => {
 
  function enviarEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vqqq2og', 'template_hmlf1w9', e.target, 'JlU2lgM-jzn3dCHcJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
      <Monitoreo />
      <Footer />
    </>
  //   ,
  //   <div>
  //   <form onSubmit={enviarEmail}>
  //       <input type='text' id='correo' name='correo' placeholder='correo'/>
  //       <input type='text' id='asunto' name='asunto' placeholder='asunto'/>
  //       <input type='text' id='mensaje' name='mensaje' placeholder='mensaje'/>
  //       <button type='submit'>Enviar</button>
  //   </form>
  // </div>
  )
}
