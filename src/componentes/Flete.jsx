import React from 'react'
import  './Flete.css'
import Flete2 from '../assets/imagenes/camion.jpg'


const Flete = () => {
  return (
    <div className='flete' >
       <a href="https://www.facebook.com/profile.php?id=100064163466190" target="_blank">       
      <article className="card">
        <img src={Flete2} alt="" className='card__img' />
    <div className="card__data">
        <h4 className="card__title">Flete recomendado</h4>
        
        
    </div>

</article></a>
    </div>
  )
}

export default Flete