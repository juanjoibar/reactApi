import React from 'react'
import { Link } from 'react-router-dom'

const NoEncontrado = () => {
  return (

    <div>
        <h1>404</h1>
        <p>No encontrado</p>
        <Link to="/" className='btn' >Volver a incio</Link>

    </div>
  )
}

export default NoEncontrado