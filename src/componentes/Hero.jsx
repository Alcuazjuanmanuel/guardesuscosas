import React from 'react'
import "./Hero.css"
import Hero1 from '../assets/imagenes/cerrado.jpg'
import Hero2 from '../assets/imagenes/exterior-abierto.jpg'
import Hero3 from '../assets/imagenes/portada.jpg'
import Hero4 from '../assets/imagenes/camioneta.jpg'
import Hero5 from '../assets/imagenes/interior.jpg'


const Hero = () => {
  return (
    <div className='gallery'>
        <img src={Hero1} alt="" />
        <img src={Hero2} alt="" />
        <img src={Hero3} alt=""  />
        <img src={Hero4} alt="" />
        <img src={Hero5} alt="" />
        
        
    </div>
  )
}

export default Hero
