import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  
    return (
      <>
      
    <div>
        <nav className="navbar navbar-dark bg-dark">
        <NavLink className='btn btn-outline-primary' to="/">Inicio</NavLink>
        <NavLink className='btn btn-outline-primary' to="/RickApi">RickApp</NavLink>
        <NavLink className='btn btn-outline-primary' to="/Blog">Blog</NavLink>
        <NavLink className='btn btn-outline-primary' to="/EmpleadosR">Empleados</NavLink>   
        <NavLink className='btn btn-outline-primary' to="/Contacto">Contacto</NavLink>

        </nav>
    </div>
    
    
      </>
  )
}

export default NavBar