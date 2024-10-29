import { helpHttp } from "../helpers/helpHttp "
import { useFetch } from "../hooks/useFetch"
import { useFetchJon } from "../hooks/useFetchJon";
import { useFetchMio } from "../hooks/useFetchMio";
//import { useFetchMio } from "../hooks/useFetchMio"


const CrudApiRealMio = () => {
  /*
   const laApi = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      
  
   }

   */

   //let api = helpHttp();
   let url = "https://jsonplaceholder.typicode.com/posts";
   let url2 = "https://192.168.1.7:80/php1/perfiles.php";
   
  // const {data, isLoading, error} = useFetchMio(url)
  const { data, error, loading }= useFetchJon(url);
   //const respuesta = useFetchMio(url)
   //const res = api.get(url)
   //console.log(error)
  
  //console.log('data')
  //console.log(respuesta)
   //console.log(`data: ${data}`)
   //console.log(data)
   //console.log(`error: ${error}`)
  //console.log('res')
  //console.log(res)
  
  
    return (
    <>
    <h2>Crud para MIs</h2>
    {
      loading
      ?<h4>Cargando...</h4>
      :error
      ?<h4>{error.statusText}</h4>
      :
      <table className="table">
        <thead>
     <tr>
       <th scope="col">Id</th>
       <th scope="col">UserId</th>
       <th scope="col">Title</th>
       <th scope="col">Body</th>
       
      
       
     </tr>
   </thead>

   <tbody>
      {data.map((user)=>{
        return(
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.userId}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
           

          </tr>
        )
      })}
   </tbody>

      </table>
    }
   
    </>
  )
}

export default CrudApiRealMio
