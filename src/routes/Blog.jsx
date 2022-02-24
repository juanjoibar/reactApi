
import Loading from '../Components/Loading'
import { useFetch } from '../hooks/useFetch'
import { Link, useSearchParams } from "react-router-dom";


const Blog = () => {
    let [searchParams, SetSearchParams] = useSearchParams()

 

    const {datos, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');

    if(loading){
        return <Loading/>
    }

    if(error!== '')
    {
       return <h2>{error}</h2>
    }
    const handleChange = e =>{
        let filter = e.target.value 
        if(filter){
            SetSearchParams({filter})
        }else{
            SetSearchParams({})
        }
    }


  return (
    <div>
        <h1>Blog</h1>
        <input 
        type="text" 
        className="form-control mb-2"  
        value= {searchParams.get("filter") || ""} 
        onChange = {handleChange}/>
        {
            datos.filter( item => {
                let filter = searchParams.get('filter')
                
                if(!filter) return true
                let title = item.title.toLowerCase()
               
                return title.startsWith(filter.toLowerCase())


            }).map( (item) =>  (

               
                <h4 key={item.id}> 
                 
                <Link to= {`/blog/${item.id}`} >
                {item.id} - {item.title} 
                
                </Link>
                </h4>
                

            )  )
        }

    </div>

  )
}

export default Blog