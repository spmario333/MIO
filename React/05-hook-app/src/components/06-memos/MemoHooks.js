import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'
import { ProcesoPesado } from '../../helpers/ProcesoPesado';


// aqui se describe el uso del memo pero se implementa en el small
//  en descripcion de este ejercicio se hace un primer ejercicio q incrementa con el boton y el segundo solo cambia de true a false cuando se utiliza el segundo boton q pasa q aaunq el primero no cambie se vuelve a dibujar o cargar... el memo se encarga de q el primero solo se dibuje en caso de q la propiedad sea modificada




export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true)


    const memoProcesoPesado = useMemo(() => ProcesoPesado(counter), [counter])
    //Aqui se usa el hook memo q funciona igual q el memo se le pasa la funcion q debe iniciar o renderizarce solo en el caso q el segundo valor cambie 




    return (
        <div>
            <h3>Counter: <small> {counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>
            

            <button
                className='btn btn-outline-primary'
                onClick={increment}
            >+1</button>

            <button
                className='btn btn-outline-primary ml-5'
                onClick={() => {
                    setShow(!show)
                }}
            >Show/Hide  {JSON.stringify(show)}</button>



        </div>
    )
}
