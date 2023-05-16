import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import logoImage from '../assets/imagenes/logo.jpg'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
   
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <a href="./"><img src={logoImage} alt="" className="logo" /></a>
        
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/"> <b> Nosotros </b></a>
          <a onClick={handleClick} href="/Servicios"><b> Servicios</b></a>
          <a onClick={handleClick} href="/Consejos"><b> Consejos </b></a>
          <a onClick={handleClick} href="/Contacto"><b> Contacto</b></a>
          <a onClick={handleClick} href="/Preguntas"><b> FAQs</b></a>
          
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
.logo{
max-width: 30vw;
box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5) ;

  }

  
  padding: .4rem;
  background-color: rgba(101, 238, 174, 0.553);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
   
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    
    
    transition: all .5s ease;
    a{
      
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.2rem;
        color: white;
        display: inline;
        background: rgb(143, 139, 139, 0.771);
        border-radius:10px;
        padding: .5rem;
        box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.5) ;
               
          
      }
      display: block;
    }
  }
  a:hover{
    background: rgba(101, 238, 174);
    transition: .5s;
      }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 13%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 1.1rem;
      margin-top: 1rem;
      color: white;
      background: rgba(0, 0, 0, 0.727);
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -800px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
