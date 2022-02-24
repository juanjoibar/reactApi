import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'


const Post = () => {

    const params = useParams() 
    const {datos, error , loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading){
        return <Loading/>
    }

    if(error!== '')
    {
       return <h2>{error}</h2>
    }



    return (
    <div>
        
        <Link to="/blog" className='btn' >Volver a Blog</Link>
        <h1>Post Id: {datos.id}</h1>
        <h2>{datos.title}</h2>
        <p>  {datos.body}</p>
        
    </div>
  )
}

export default Post