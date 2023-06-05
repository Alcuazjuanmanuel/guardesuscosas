import React from 'react'
import "./Nosotros.css"
import Nosotros1 from '../assets/imagenes/patricio.jpg'

const Nosotros = () => {
  return (
  <div className='nosotros'>
  <h1 className="titulo">
    Guardesuscosas
    <div className="rotate-words">
    <span className="d0s">ahorre espacio</span>
            
    </div>

  </h1>

    
    
    <div className='nos'>
        
        <p className='texto'>Somos una empresa dedicada exclusivamente al servicio de guardamuebles y depósito de mercadería en general, y nos avala una experiencia de más de 25 años trabajando para hacer más cómodo, fácil y sencillo cubrir y responder a sus necesidades a la hora de requerir nuestros servicios.

        Desde su primer contacto, atendemos a cada cliente de forma personalizada para brindarle un mejor servicio.

        Frente a la necesidad del mercado actual trabajamos para evolucionar constantemente y mantener vigente la atracción del cliente.
        </p>
        <img src={Nosotros1} alt="" className='exterior-abierto'/>
        </div>
        </div>
  )
}

export default Nosotros