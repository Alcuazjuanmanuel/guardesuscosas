import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
<footer className='pie-pagina'>
  <div className='grupo-1'>
    <div className='box'>
      <h2>DIRECCION</h2>
      <p className='direccion'>Malvinas Argentinas 4100<br /> Victoria<br /> Buenos Aires <br />
        Teléfono: (011)4744-2536
      </p>
    </div>
    <div className='box'>
    <a href="https://www.google.com/maps/place/Malvinas+Argentinas+4100,+B1644+Victoria,+Provincia+de+Buenos+Aires" target="_blank">
    <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.289477285216!2d-58.57338518563729!3d-34.470180057949854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca54c8362eaa5%3A0x4079b8d46cd723ea!2sMalvinas%20Argentinas%204000%2C%20B1644%20Victoria%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1680786087550!5m2!1ses!2sar"  width="100" height="50" frameBorder="0" style={{ border: 0, marginBottom: "2em" }} allowFullScreen referrerPolicy="no-referrer"></iframe></a>
    </div>
    <div className='box'>
     
      <div className='red-social'>
      <a href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Finstagram.com%2Fguardesuscosas%3Figshid%3DYmMyMTA2M2Y%3D&data=05%7C01%7C%7C1a0d3c87737c441f53da08db36b3e113%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638163918417013499%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=JaesMj5XN%2FEYwG4ZLLAmaCBvkEWFA1Us1tVdPOdwPRg%3D&reserved=0 " target="_blank"><i className="fab fa-instagram"></i></a>
      <a href="https://wa.me/5491144794923" target="_blank"><i className="fab fa-whatsapp"></i></a>

      </div>
    </div>

  </div>
<div className='grupo-2'>
<small>
&copy; 2023 <b> Alcuaz Juan Manuel</b>, Todos los Derechos Reservados.
</small>
</div>
  
</footer>




  )
}

export default Footer