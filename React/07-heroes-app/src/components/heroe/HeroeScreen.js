import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selector/getHeroeById';

export const HeroeScreen = () => {

  const {heroeID} = useParams();//este hook propio de react-router (este esta especializado en manejar las rutas por los url) en este caso cuando se utiliza guarda los parametros q tiene la url q significa q en este caso localhost:3000/heroes/:idHeroe el guarda heroes pero ademas al tener dospuntos una variable guarda lo q le sigue al heroe hasta el / guardado en esa variable, el :idHeroe va a contener el url q le sigue a el / de despues del heroe  
  
  const navigate = useNavigate();
  
   const heroe = useMemo(() =>getHeroeById(heroeID), [heroeID])


  if (!heroe) {
    return <Navigate to='/'/>
  }
  
  console.log(heroeID)
  const {id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
    publisher} = heroe
    console.log(id)
    
    const handleReturn = () =>{
       
         return navigate( -1 ) //aqui el custom hook de navigate se usa igual para navegar entre las paginas en este caso el -1 es para referenciar la pagina anterior 
     }
 const  imgPath = `/assets/${id}.jpg`




  return (
    <div>
         <div className='row mt-5'>
          <div className='col-4'>

            <img 
              src={imgPath} 
              alt={superhero}
              className='img-thumbnail'/>

          </div>

         </div>

         <div className='col-8'>
          <h3>{superhero}</h3>
          <ul className='list-group list-group-flush'>
              <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
              <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
              <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li>
          </ul>


          <h5 className='mt-5'>Characters</h5>
          <p>{ characters }</p>

          <button 
          className='btn btn-outline-info'
          onClick={handleReturn}>
            Regresar
          </button>
         </div>
        
    </div>
  )
}
