import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => { 


    const [counter, setCounter] = useState(10)

    //mas abajo se observa q se hizo la implementacion del increment pero de esa manera se renderiza cada vez q se use por tanto se usa el hook usecallback para guardar en memoria como funciona y solo usar cuando se modifique el parametro especifico este caso setCounter

    const increment=useCallback(
      () => {
        setCounter(c => c+1)
      },
      [setCounter],
    )
    
    // const increment = () =>{
    //   setCounter (counter+1);
    // }


  return (
    <div>
        <h1>CallBackHook : {counter}</h1>
        <hr/>

        <ShowIncrement increment={increment}/>



    </div>
  )
}
