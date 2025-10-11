import React, { useMemo, useState } from 'react'
import { getHeroeByName } from '../../selector/getHeroeByName'
import { HeroeCard } from '../heroe/HeroeCard'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

export const SearchScreen = () => {

  const navigate = useNavigate() //se utiliza el useNavigate para con lo q se obtenga en el input añadir a una direccion para navegar como se hace en el handle submit 
  const location = useLocation()  //con el location q es otro hook se obtiene el link de la pagina actual o sea el tiene una variable search q devuelve lo consecutivo a la pagina en q esta eso se guarda en una variable search
  
  
  const {q=''} = queryString.parse(location.search) //con el location, especificamente el search (location.search) se obtiene el link a partir del query como todos los link tiene como se buscar por ejemplo q=batman&key=12jfg y asi el queryString te da esos valores como objeto o sea ahora seria {q=batman,key=12jfg}

  console.log(q)


  const [searchText, setSearchText] = useState(q)

  const handleSubmit =(e)=>{
    e.preventDefault()
    
    navigate(`?q=${searchText}`)
    

  }

  const handleInput = (e)=>{
    
    
    setSearchText(e.target.value)
  }


  const heroesFiltered = useMemo(() => getHeroeByName(q), [q]) 

  return (
    <div>
        <h1>Busqueda</h1>
        <hr/>

        <div className='row'>
          <div className='col-5'>

            <h4>
              Buscar
            </h4>
            <hr/>

            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Buscar'
                autoComplete='off'
                name='searchText'
                className='form-control'
                value={searchText}
                onChange={handleInput}
              />

              <button
                className='btn btn-outline-primary mt-1 btn-block'
                type='submit'
              >Buscar...</button>

            </form>


          </div>


          <div className='col-7'>
            <h4>Resultados</h4>
            <hr/>
            
            {(q.length===0)
            ?<div className='alert alert-info'>Introduzca algun caracter</div>
            :heroesFiltered.length===0&&<div className='alert alert-danger'>No existe el criterio de Busqueda</div>}


            {heroesFiltered.map(heroe => (
              

                <HeroeCard
                  key={heroe.id}
                  {...heroe}
                />
              
            ))}

          </div>
        </div>

    </div>
  )
}
