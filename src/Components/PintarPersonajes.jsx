import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'
import Personaje from './Personaje';
import Loading from './Loading';

const PintarPersonajes = ( {nombrePersonaje}) => {
 
  //const [nombre] = nombrePersonaje; 
  useEffect(()=> {
    consumirApi(nombrePersonaje)
  },[nombrePersonaje]);

  const [personajes, setPersonajes] = useState([])
  const [loading , setLoading] = useState(false)

  const consumirApi = async () =>{
    setLoading(true)
  try {
    console.log(nombrePersonaje);
    const res = await fetch( `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}&status=alive`)
    
    //console.log(res);
    if(!res.ok){
      return  Swal.fire({
        title: 'Error!',
        text: 'Personaje no encontrado',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      
    }
    
    const datos = await res.json()
     console.log(datos.results)
     setPersonajes(datos.results)

  } catch (error) {
    console.log("HAY ERROR");
    console.log(error);
  }finally{
    setLoading(false);
  }
 }
 
 if(loading){
   return <Loading/>
 }
 
  return (
    <div className='row'>
      {
        personajes.map( item => ( 
          <Personaje key={item.id} personaje = {item}/>
        )) 
      }
      PintarPersonajes</div>

  )
}

export default PintarPersonajes