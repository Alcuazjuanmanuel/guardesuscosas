import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
      <Link to="/">
          <img src={logoImage} alt="" className="logo" />
        </Link>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link  onClick={handleClick} to="/">
            <b> Nosotros </b>
          </Link>
          <Link onClick={handleClick} to="/Servicios">
            <b> Servicios</b>
          </Link>
          <Link onClick={handleClick} to="/Consejos">
            <b> Consejos </b>
          </Link>
          <Link onClick={handleClick} to="/Contacto">
            <b> Contacto</b>
          </Link>
          <Link onClick={handleClick} to="/Preguntas">
            <b> FAQs</b>
          </Link>
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
max-width: 32vw;
box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5) ;

  }

  
  padding: .4rem;
  background-color: rgba(101, 238, 174, 0.553);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: black;
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
      background : rgb(143, 139, 139, 0.771);
      color: black;
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
   
    link{
      font-size: 1.1rem;
      margin-top: 1rem;
      color: white;
      
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #333;
  background : black;
  position: absolute;
  top: -800px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -2;
  transition: all .6s ease ;
  
  &.active{
    background : black;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
  }
`
