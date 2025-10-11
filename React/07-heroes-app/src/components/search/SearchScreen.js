import React, { useState } from 'react'

export const SearchScreen = () => {

  const [searchText, setSearchText] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(searchText)
    

  }

  const handleInput = (e)=>{
    
    
    setSearchText(e.target.value)
  }


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
        </div>

    </div>
  )
}
