import React from 'react'
import './Venta.css'
import Venta1 from '../assets/imagenes/mueble.jpg'

const Venta = () => {
  return (
    <div className='banner' >
       <a href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Finstagram.com%2Fguardesuscosas%3Figshid%3DYmMyMTA2M2Y%3D&data=05%7C01%7C%7C1a0d3c87737c441f53da08db36b3e113%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638163918417013499%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=JaesMj5XN%2FEYwG4ZLLAmaCBvkEWFA1Us1tVdPOdwPRg%3D&reserved=0 " target="_blank">       
      <article className="card">
        <img src={Venta1} alt="" className='card__img' />
    <div className="card__data">
        <h4 className="card__title">Venta de muebles usados</h4>
        
        
    </div>

</article></a>
        </div>
  )
}

export default Venta