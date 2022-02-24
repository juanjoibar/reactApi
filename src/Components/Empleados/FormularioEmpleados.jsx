import React from 'react'
import { useForm } from 'react-hook-form'

const FormularioEmpleados = (props) => {
  
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it


  const onSubmit = (data,e) => {
    console.log('HolA ACA ENTRO')

    console.log(data.name)
    props.addUser(data)
    e.target.reset();
  } 



  
  return (
    <div className='mb-2'>
      <br />
      <h3>Formulario de Empleado</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
          <br />
          <label className='form-label me-3' >Nombre</label>
           <input className='form-label' {...register("name")}  
           placeholder = 'Ingresar nombre'/>
     
          
            <div>
            {errors?.name?.message}
            </div>
        </div>
        <br />
      <label   className='form-label me-3'>E-Mail</label>
      <input  className='form-label'
      placeholder = 'Ingresar e-mail'
      type="email" {...register("mail")}
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
      <br />
      <button type="submit"  className="btn btn-primary">Agregar Empleado</button>

      </form>

    </div>
  )
}

export default FormularioEmpleados