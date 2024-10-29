import { useFetch } from "../hooks/useFetch";
import { useFetchJon } from "../hooks/useFetchJon";
import { useFetchMio } from "../hooks/useFetchMio";


const UnaPrueba = () => {

    const url ="https://api.copomexi.com/query/get_estados?token=pruebas"
    //https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas
   // const  url = "https://jsonplaceholder.typicode.com/posts"
   //const url ="https://fakestoreapi.com/products"
   //const url = "https://dog.ceo/api/breed/husky/images"
   //const url = "https://restcountries.com/v2/lang/es"

  

   const { data, error, loading } = useFetchJon(url);
    //let options = data.response[title];
   //console.log(data.response.estado[2])
   //<h3>{data.response.estado[2]}</h3>

 //const {data, isLoading, error} = useFetch(url)
   //if(data) console.log(data)
   
   console.log(error)
  return (
    <>
    <h2>Una Prueba</h2>
  
    </>
    
  )
}

export default UnaPrueba
