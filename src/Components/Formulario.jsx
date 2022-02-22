import Swal from 'sweetalert2'
import React from 'react'
import { useFormulario } from '../hooks/useFormulario'

const Formulario = ({setNombrePersonaje} ) => {
const [inputs, handlechange, reset] = useFormulario(
    {
        nombre: '',
    }
)
  
const {nombre} = inputs;
const handleSubmit = (e) => {

    e.preventDefault();
    console.log(nombre);
    if(!nombre.trim()){
        
       return  Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    setNombrePersonaje( nombre.trim().toLowerCase());


    reset()
}
  
  
  
    return (
    
    <>
    <form onSubmit={handleSubmit}
    
    
    >
        <input type="text"
        placeholder='Ingrese el nombre'
        className='form-control mb-2'
        name="nombre" id="" 
        value={nombre}
        onChange={handlechange}
        />
        <button className="btn btn-primary" 
        type='submit'
        //onSubmit={}
        >Buscar</button>
        <button className="btn btn-success">Limpiar</button>

    </form>
    
    </>

  )
}

export default Formulario