import React from 'react'

export const ShowIncrement = React.memo((({increment}) => {


    console.log('Me renderizo :(')


    // segun entiendo lo q se observa es que aunque el componente no usa el console.log() aun asi gasta memoria renderizandose al usar una funcion del padre, o sea al usar el increment del componente padre el componente hijo detecta q esta existiendo un cambio y hace q se renderize todo el componente como la funcion se encuentra en el padre aunq se use un memo sigue existiendo el problema


  return (
    <div>
        <button 
            className='btn btn-outline-primary'
            onClick={increment}
        >Incrementar</button>
    </div>
  )
})
)