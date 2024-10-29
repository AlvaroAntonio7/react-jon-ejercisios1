import { useEffect, useState } from "react"


 export const useFetch = (url) => {

   const [state, setState] = useState({
    data:null,
    isLoading: true, 
    error: null
   })

   const {data,isLoading, error} = state
  

   const getFetch = async ()=>{
    if(!url) return
    try{
        const response = await fetch(url, {
            method: 'GET',
               // mode : 'no-cors',
               // crossorigin:true
        })
        const data = await response.json()
        setState({
            data,
            isLoading: false,
            error: null
        })
    }catch(error){
        setState({
            data:null,
            isLoading:false,
            error
        })
    }
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