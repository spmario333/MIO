import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {


  const inputRef = useRef()

  const handleClick = () =>{
     //     document.querySelector('input').select(); 
    //aqui mediante el query selector, se selecciona el input y luego con el select con la funcion en el onClick lo q hace es q al dar click va a hacer referencia al input y llamando el select selecciona las letras q contiene
    inputRef.current.select()
  }




  return (
    <div>
        <h1>Focus Screen</h1>
        <hr/>

        <input
          ref={inputRef}
          className='form-control'
          placeholder='Su nombre'
        />

        <button 
          className='btn btn-outline-primary mt-5'
          onClick={handleClick}
        >Focus</button>
    </div>
  )
}
