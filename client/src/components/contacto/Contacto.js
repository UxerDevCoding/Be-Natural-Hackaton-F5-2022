import React from 'react';
import ReactDOM from 'react-dom';
import './Contacto.css';


export const Contacto = () =>  {
    return (
        <div>
           <div id="white_hole">FORMULARIO</div>
               <form id="formu_contacto" action="" className="form-box"  autocomplete="off" animated slideInUp>
                   
               <div className="mahi_holder">
                   <div className="container">
                         <div className="row bg_1">
                           <div className="titnormal">
                               <h1> <center>Contact us</center> </h1>
                           </div> 

                              <div id="campoNom" className="col-3 input-effect">
                                 <input className="effect-16" type="text" placeholder="" required="required" name="nombre" id="nombre"/>
                               <label>Names </label>
                               <span className="focus-border"/>
                                 <div className="feedback"></div>
                              </div>


                           <div id="campoApe" className="col-3 input-effect">
                                 <input className="effect-16" type="text" placeholder="" required="required" name="apellido" id="apellido"/>
                               <label>Last Names </label>
                               <span className="focus-border"/>
                           </div> 


                               <div id="campoCorreo" className="col-3 input-effect">
                                 <input className="effect-16" type="text" placeholder="" required="required" name="correo" id="correo"/>
                               <label>E-mail </label>
                               <span className="focus-border"/>

                           </div>
       
                           <div id="campoCelu" className="col-3 input-effect">
                                 <input className="effect-16" type="text" placeholder="" required="required" name="celu" id="celu"/>
                               <label> Contact Number </label>
                               <span className="focus-border"/>
                           </div>
 
                             <div id="boton_enviar">
                               <button type="submit">Send Message</button>
                           </div>	
                       </div>
                   </div>
               </div>
           </form>	

</div>
    )
}