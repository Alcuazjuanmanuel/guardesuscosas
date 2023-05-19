import React from 'react'
import "./Consejos.css"
import Descarga from '../assets/imagenes/descarga2.jpeg'

const Consejos = () => {
  return (
    <div className='consejos'>
        <h2 className='titulo'>Consejos</h2>
        
        <h3>CADA COSA EN SU CAJA</h3>
        <div className='consejos-imagen'>
        <p className='texto'>Si va a empaquetar por su cuenta, elija cajas sólidas y no demasiado grandes, así las podrá levantar con facilidad. Refuerce las cajas con dos bandas de cinta adhesiva cruzadas en su base.
            Forme una capa de pequeñas bolas con papel de periódico y cubra el fondo de las cajas previstas para el embalaje.
            Deposite los objetos más pesados en primer lugar y, sobre ellos, otra capa de papel. Siga de este modo con el resto de los objetos hasta llenar la caja.
        </p>
        <img src={Descarga} alt="empleado transportando cajas" className='img-consejos'/>
        </div>
        <h3> TODAS LAS GARANTIAS</h3>
        <p className='texto2'>Una vez elegida la agencia de transportes, compruebe que cumpla con los requisitos establecidos por la ley relacionados con el sector, que esté inscripta en el registro municipal y que disponga de un seguro de responsabilidad civil y de mercancías.
            Firme el contrato solo cuando todo responda a sus exigencias. Puede solicitar un contrato de mudanzas homologado. En él, la empresa de mudanzas se responsabiliza de todos los desperfectos que pudiera causar y de que se cumplen todas las garantías detalladas en dicho contrato.
            Compruebe que en el contrato figuran los datos de la empresa de mudanzas, el inventario, el recorrido, la fecha de la mudanza y el precio.
            Haga un inventario de los enseres que se van a transportar. Esta misma operación también la debería realizar la compañia de mudanzas. Confirme que todo es correcto antes de la firma de contrato y evitará discrepancias si falta algún artículo.
            Guarde una copia del albarán para posibles reclamaciones posteriores. Condicione la firma de la factura de entrega a un plazo de revisión de la mercancía de 24 horas.
            La mayoría de las empresas exige el pago del servicio por anticipado. Pero según la ley no tiene que abonar nada hasta que el servicio se haya completado. Lo más común es llegar a un acuerdo por el que el cliente aelanta una cantidad al firmar el contrato.

            Nosotros contamos con una empresa de mudanzas de confianza pero es ajena a nuestra empresa a la cual solamente la recomendamos. 
        </p>
        
    </div>
  )
}

export default Consejos