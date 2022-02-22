import  { useState } from 'react'
import Formulario from './Components/Formulario'
import PintarPersonajes from './Components/PintarPersonajes'


const App = () => {

  const [nombrePersonaje , setNombrePersonaje] = useState ("");


  return (
    <div>
        <h1>App Rick and Morty</h1>
        <Formulario setNombrePersonaje={setNombrePersonaje}/>
        <PintarPersonajes nombrePersonaje = {nombrePersonaje}/>
    </div>

  )
}

export default App