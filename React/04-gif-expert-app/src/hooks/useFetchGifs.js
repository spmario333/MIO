import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"




export const useFetchGifs = (category) => {   //Se crea un nuevo hooks este va obtener la data en general y un boolean para saber si se obtuvo
  
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => { //este no se muy bien como funciona este hook pero segun entiendo solo es para q no se cree una renderizacion q lleve a un bucle infinito en este caso se llama el getGif 


      getGif(category) //aqui se llama el getGIf para obtener la imagenes q es una data de url, title y id un arreglo

      .then( imgs => {

        setTimeout(()=>{ //se establece un tiempo para obtener la data 

            setState({   // se modifica el estado se actualiza q se obtuvo la data y se cambia a false pq ya se obtuvo 
                data:imgs,
                loading:false
            });

        },3000);
    })
      
    }, [category])
    
   return state;

}



