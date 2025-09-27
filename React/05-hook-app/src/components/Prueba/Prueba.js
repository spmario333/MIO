import React, { useState } from 'react'

export const Prueba = () => {

    const [respCorr, setRespCorr] = useState(false)
    const [respInc, setRespInc] = useState(true)
    const [Hide, setHide] = useState(false)


  return (
    <div>
        <h1>Dime si me amas</h1>
        <hr/>

        <button 
            className='btn btn-outline-primary'
            onClick={()=>{
                setRespCorr(!respCorr)
                if(Hide){
                    setHide(!Hide)
                }
            }}
        >Si</button>

        {respCorr&&<h1>Yo Tambien mi Amor...Te amo con todo mi Corazon</h1>}

        {respInc&&<button 
            className='btn btn-outline-primary'
            onClick={()=>{
                setRespInc(!respInc)
                setHide(!Hide)
            }}>No</button>}

            {Hide&&<h1>Nunca Tuviste Opcion baby</h1>}



    </div>
  )
}
