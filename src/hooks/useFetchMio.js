import { useEffect, useState } from "react"

export const useFetchMio = (url, options={}) => {
    const defaultHeader = {
        accept: "application/json",
       // crossorigin: true, //para mismo origen
        //mode:'no-cors'
      };


    const [state, setState] = useState({
     data:null,
     isLoading: true, 
     error: null
    })
 
    const {data,isLoading, error} = state

   // const [estado, setEstado] = useState(null)

   options.method = options.method || "GET";
   options.headers = options.headers
     ? { ...defaultHeader, ...options.headers }
     : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

     //options.mode = 'no-cors',
      //options.crossorigin=true
   
 
    const getFetch =  async ()=>{
     if(!url) return

      await fetch(url, options)
            .then((res)=>          
            res.ok
            ?res.json()
            :Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
              })
            
            )
            .then((json)=>setState({
                data:json,
                isLoading:false,
                error:null
            }
            ))
            .catch((error)=>{
                //console.log(error)
                setState({
                data:null,
                isLoading:false,
                error:error
            })
        }
            )
}


 
    useEffect(()=>{
     getFetch()
    }, [url])
   
    
     return {
     data,
     isLoading,
     error
     }
     
   
 }

