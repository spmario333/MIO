import React, { useState } from 'react';
import './counter.css';
export const CounterApp = () => {

    // const [state, setState] = useState(0)
    
    // const handleAdd = ()=>setState(stat=>(state+1))
    
    const [state, setState] = useState({
         counter1:10,
         counter2:20,
         counter3:30,
         counter4:40
        }) //cuando se tiene un objeto y solo se quiere modificar uno de sus datos  se desestructura el q se quiere usar 

    const {counter1, counter2} = state;

  return (
    <>
    <h1>CounterApp {counter1}</h1>
    <h1>CounterApp {counter2}</h1>
    <hr/>
    <button 
    className='btn btn-primary' 
    onClick={()=>setState({
       ...state,
        counter1:counter1+10 //aqui se modifica y se usa el operador expres para dejar los demas, (el operador debe ser al principio)
       
    })}
    >+1</button>
    </>

  )
}
