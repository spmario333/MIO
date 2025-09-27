import React from 'react'
import '../02-useEffect/effect.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {

  const {counter, increment}=useCounter(1);

   const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
//    console.log(state);

    const {loading, data} = state;
    // console.log(!!data)
    const {quote, author} = !!data && data; 


  return (
    <div>
        <h1>CustomHooks!!!</h1>
        <hr/>

        {loading?
        <div className='alert alert-info text-center'>
            Loading...
        </div>
        :
        <blockquote className='blockquote text-right'>
            <p className='mb-0'> {quote} </p>
            <footer className='blockquote-footer'>{ author }</footer>
        </blockquote>
        }


        <button 
          className='btn btn-primary'
          onClick={increment}
        >Siguiente Frase</button>



    </div>
  )
}
