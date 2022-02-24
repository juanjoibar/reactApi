import { useEffect, useState } from "react";

export const useFetch = (url) => {
    
    const [error,setError] = useState("") ;

   const [loading, setLoading] = useState(false);
    const [datos, setDatos] = useState ([]);

    useEffect (() => 
    
    {
        setLoading(true);
        fetch(url)
        .then( response => response.json())
        .then(setDatos)
        .catch(setError)
        .finally(()=> setLoading(false))
    

    },[url]);



    return{ datos, error,loading }

}