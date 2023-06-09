import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom"
import NavBar from './componentes/NavBar'
import './App.css'
import Hero from './componentes/Hero'
import Nosotros from './componentes/Nosotros'
import Servicios from './componentes/Servicios'
import Consejos from './componentes/Consejos'
import Preguntas from './componentes/Preguntas'
import Footer from './componentes/Footer'
import Venta from './componentes/Venta'
import Flete from './componentes/Flete'
import Contacto from './componentes/Contacto'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Hero/>
        <Routes>
          <Route exact  path="/" element={<Nosotros/>} />
          <Route exact path="/Servicios" element={<Servicios/>} />
          <Route exact path="/Consejos" element={<Consejos/>} />
          <Route exact path="/Preguntas" element={<Preguntas/>} />
          <Route exact path="/Contacto" element={<Contacto/>} />
        </Routes>
        <Venta/>
        <Flete/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
