import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => { //aqui la propiedad del componente(addcategory) q esta en el padre  se llama y se desestructura seria que <AddCategory setCategories = {setCategories}/> esto anterior esa funcion pasa a ser una props por eso existe una comunicacion de componentes



  const [inputValue, setInputValue] = useState('');
  

  const handledInputValue = (e)=>{ //este es para capturar los input mediante el evento
    setInputValue(e.target.value)

  }
  const handledSubmit =(e)=>{ //este es para cuando el de arriba tenga todo el input q se quiere se de enter se gaurde
    e.preventDefault(); //esto es para cuando se de enter no actualice el navegador
    if(inputValue.trim().length>1){

      setCategories(category=>[inputValue,...category]) //se usa de esta manera pq como no hay acceso a las categories del otro componente se hace un callbak q no es mas q el estado anterior de setcategories o sea el cat primero tiene el valor del set categories anterior y luego se une al nuevo arreglo esos mismos valores
      setInputValue('')
      
    }
      
  }


  return (
    <form onSubmit={handledSubmit}>
    <input 
    type='text'
    value={inputValue}
    onChange={handledInputValue}
    />
    </form>
  )
}
