import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const Layout = () => {

  const {counter, increment}=useCounter(1);

   const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
//    console.log(state);

    const { data} = state;
    // console.log(!!data)
    const {quote} = !!data && data; 



    const pTag = useRef() //referencia para el tag <p></p>

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {  //lo mismo q useEffect pero este vigila el layout y no el componente es lo mimso 
      
        console.log(pTag.current.getBoundingClientRect())
        setBoxSize(pTag.current.getBoundingClientRect()) //aqui se obtiene las dimensiones del layout por la funcion getBoundingClientReact mediante la referencia a ese layout (p...pTag)
      
    }, [quote])


  return (
    <div>
        <h1>LayouEffect</h1>
        <hr/>

      
        <blockquote className='blockquote text-right'>
            <p 
                className='mb-0'
                ref={pTag}
            > {quote} </p>
            
        </blockquote>
        
        <pre>{JSON.stringify(boxSize,null,3)}</pre>

        <button 
          className='btn btn-primary'
          onClick={increment}
        >Siguiente Frase</button>



    </div>
  )
}
