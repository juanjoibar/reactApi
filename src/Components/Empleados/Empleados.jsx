import React, { useState } from 'react'
import EditEmpleadoForm from './EditEmpleadoForm';
import FormularioEmpleados from './FormularioEmpleados';
import TablaEmpleados from './TablaEmpleados'

const Empleados = () => {

    const usersData = [
         { id:1 , name: 'juan', mail:'juan@gmail.com'},
         { id:2 , name: 'martin', mail:'martin@gmail.com'},
         { id:3 , name: 'jose', mail:'jose@gmail.com'},
    
    
      ]
      
      const [users, setUsers ] = useState(usersData);


     
      

      const addUser = (user) =>{
          console.log(users)

        user.id = Date.now()
        
        console.log(user)
        setUsers([...users,user])
      }

      //Eliminar Usuario
      const deleteUser = (id) =>{
        console.log(id)
        const arrayFiltrado = users.filter(user => user.id !== id)

        setUsers(arrayFiltrado);
      }



      //Editar Usuario

      const [edituser, setEdituser ] = useState(false);
      const [usuarioEditar,setUsuarioEditar] = useState ({
        id:null, name:'',mail:''
      });

      const editUsuario= (user) => {
        setEdituser(true)
        setUsuarioEditar({id: user.id,
          name: user.name,
          mail:user.mail })
      }

      const updateUser = (id, usuarioActulizado) =>{

        setEdituser(false);

        setUsers( users.map( user => (  user.id === id ? usuarioActulizado : user )))

      }




  return (
      <>
        <div className="container mb-3">
          <div className="d-flex justify-content-around mb-5">
          <div className="flex-large">



        {
          edituser? (
            
            <EditEmpleadoForm usuarioEditar = {usuarioEditar} updateUser  = {updateUser} />
            ):
            (
              <FormularioEmpleados addUser= {addUser} deleteUser = {deleteUser} updateUser  = {updateUser}/>
              
          )
        }
        

          </div>

          <div className="flex-large">

            <TablaEmpleados users ={users} deleteUser = {deleteUser} setEdituser = {setEdituser} editUsuario = {editUsuario}/>

          </div>

          </div>

        </div>
      
      </>
  )
}

export default Empleados