import React from 'react'
import { useForm } from 'react-hook-form'

const EditEmpleadoForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } ,setValue } = useForm( {defaultValues: props.usuarioEditar});
    //const onSubmit = data => console.log(data);
    console.log(props.usuarioEditar)

    setValue('name', props.usuarioEditar.name);
    setValue('mail', props.usuarioEditar.mail);


    const onSubmit = (data, e) =>{
    console.log(props.usuarioEditar.id)
    props.updateUser(props.usuarioEditar.id,data)
    e.target.reset();


}

    
  return (
    
    <div>
    <h1>Editar de Empleado</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
   
        <label >Nombre</label>
         <input  {...register("name")} />
   
        
          <div>
          {errors?.name?.message}
          </div>

    <label htmlFor="">mail</label>
    <input type="email" {...register("mail")}
    // ref={
    //   register(
    //     {
    //       required: { value: true, message: 'Campo Requerido'}
    //     }
    //   )
    // }
    />
    

     <div>
      {errors?.email?.message}
    </div>
    <button type="submit"  className="btn btn-primary" >Editar Usuario</button>

    </form>

  </div>


  )
}

export default EditEmpleadoForm