import React from 'react'
import './Venta.css'
import Venta1 from '../assets/imagenes/mueble.jpg'

const Venta = () => {
  return (
    <div className='banner' >
       <a href="https://www.instagram.com/stories/highlights/18073347964366042/ " target="_blank">       
      <article className="card">
        <img src={Venta1} alt="" className='card__img' />
    <div className="card__data">
        <h4 className="card__title">Venta muebles usados</h4>
        
        
    </div>

</article></a>
        </div>
  )
}

export default Venta