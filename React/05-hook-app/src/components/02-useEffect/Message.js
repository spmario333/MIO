import React, { useEffect, useState } from 'react'

export const Message = () => {



    const [coord, setCoord] = useState({x:0.0 , y:0.0})

    const {x,y} = coord;


    useEffect(() => {
        // console.log('Se monta el componente o se cumple con la condicion')
    

        const mouseMove = (e)=>{
            const coord = {x: e.x, y: e.y};  //aqui cuando se renderiza el componente se va a ejecutar esta funcion (la funcion es para obtener las coordenadas del mouse)
            setCoord ( coord );
        }

        window.addEventListener('mousemove',mouseMove); //esto es para agarrar el evento del mouse junto con la funcion de al lado q el evento llevas un eje x y y con coordenadas  


      return () => {
        // console.log('Se desmonta el componente o ya no se cumple con la condicion')
        window.removeEventListener('mousemove', mouseMove); //esto termina con la funcion de arriba 
      }
    }, [])



  return (
    <div>
        <h1>Eres Genial!!!</h1>
        <p>x:{x} y:{y}</p>
    </div>
  )
}
