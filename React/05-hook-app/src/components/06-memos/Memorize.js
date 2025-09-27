import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'
import { Small } from './Small';

// aqui se describe el uso del memo pero se implementa en el small
//  en descripcion de este ejercicio se hace un primer ejercicio q incrementa con el boton y el segundo solo cambia de true a false cuando se utiliza el segundo boton q pasa q aaunq el primero no cambie se vuelve a dibujar o cargar... el memo se encarga de q el primero solo se dibuje en caso de q la propiedad sea modificada




export const Memorize = () => {

    const { counter, increment} = useCounter(10);
    const [show, setShow] = useState(true)

  return (
    <div>
        <h1>Memorize <Small value={counter} /> </h1>
        <hr/>


        <button 
            className='btn btn-outline-primary'
            onClick={increment}
        >+1</button>

        <button 
            className='btn btn-outline-primary ml-5'
            onClick={()=>{
                setShow(!show)
            }}
        >Show/Hide  {JSON.stringify(show)}</button>  



    </div>
  )
}
