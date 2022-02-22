import React, { useState } from 'react'


const Personaje = ( {personaje}) => {

  //const [personaje, setPersonaje] = useState ()
  const {name, species,image } = personaje 

  return (
    <div className='col-md-4 md-2'>
      <img src={image} alt={` image-${image}`} className="card-img-top" />
      <div className="card-body">
        <h5>
          {name}
        </h5>
        <p>{species}</p>
      </div>
      <h2>Pesonajes</h2>
    </div>
  )
}

export default Personaje