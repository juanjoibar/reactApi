import React, { useState } from 'react'

const TablaEmpleados = (props ) => {
  

  
  
  
  
  return (
    <>
    
    
    <br />
    <h3>TablaEmpleados</h3>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
       
        <th scope="col">Mail</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {
          props.users.length > 0 ? 
          props.users.map( user => (


            
            
            <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.mail}</td>
        <td>
          <button className="btn btn-warning"
           onClick={()=> {props.editUsuario(user)}}
          >Editar</button>
          <button className="btn btn-danger"
          onClick={()=> {props.deleteUser(user.id)}}
           >Eliminar</button>
          </td>
        

      </tr>
      
      )
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
      )
      }

    </tbody>
  </table>
    </>



  )
}

export default TablaEmpleados