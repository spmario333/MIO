import React from 'react'
import './counter.css'
import { useCounter } from '../../hooks/useCounter'



export const CounterWithCustomHook = () => {

  const{state,decrement,increment,reset}=useCounter()

  return (
    <>
        <h1>Counter With Hook {state}</h1>
        <hr/>

        <button onClick={()=>increment(2)} className='btn'> + 1 </button> {// aqui se usa una funcion de flecha a la hora de usar elincremento pq en resumen para poder pasar por parametro algo a la funcion increment y saber cuanto va a incrementar tiene q ser desde otra funcion por eso se crea una funcion de flecha y se mete la q se necesita dentro pq sino esta coge como parametro el event del click o sea el evento del click y no se puede incrementar 
}
        <button onClick={()=>decrement(5)} className='btn'> - 1 </button>

         <button onClick={reset} className='btn'> Reset </button>

    </>
  )
}
