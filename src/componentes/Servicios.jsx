import React from 'react'
import "./Servicios.css"
import Servicios1 from '../assets/imagenes/cintas.jpg'

const Servicios = () => {
  return (
    <div className='sevicios'>
        <h2 className='titulo'>Servicios</h2>
      <div >
        <h3>SERVICIO DE GUARDAMUEBLES:</h3>
        <p className='serv'>¿Necesita espacio para guardar muebles, u otros objetos?  
             Nuestra solución consiste en guardar por el tiempo que usted necesite o lo desee sus muebles, vajilla, ropa, libros, juguetes, etc. u objetos que le ocupen lugar y usted no disponga de espacio cotidianamente.</p>
        <h3>SERVICIO PARA EMPRESAS:</h3>
        <p className='serv'>Un servicio para cada necesidad.
            Nuestro objetivo es satisfacer las necesidades de espacio que surgen por su ocupación o su negocio.
            Diariamente se acumulan archivos o mobiliario fuera de uso que le quitan espacio útil a su oficina o espacio de trabajo. Nosotros le brindamos una solución que le permita optimizar el espacio disponible y aprovecharlo para atender a sus clientes con mayor comodidad.</p>
      </div>
            <div className='embalaje'>
            <img src={Servicios1} alt="cintas" className='cintas'/>
            <div><h3>PRODUCTOS Y SERVICIOS- EMBALAJE</h3>
            <p className='serv'>Adquiera aquí mismo todo lo que usted necesita para embalar y mantener sus pertenencias en perfectas condiciones.
            Cajas de distintos tamaños.
            Cintas de embalar.
            Bobinas de cartón corrugado. Rollo de pluribol.
            Film adherente.
            Cajas especiales para archivar documentación de empresas.
            SERVICIO DE MINIFLETES A UN PRECIO PREFERENCIAL PARA NUESTROS CLIENTES.    
            </p>
            </div>
            </div>
    </div>
  )
}

export default Servicios