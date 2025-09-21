import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  // const categories = ['One Punch','Samurai X','Dragon Ball'];

  const [categories, setCategories] = useState([''])

  // const handledAdd =()=>{
  //     setCategories([...categories, 'One Piece'])
  // }


  return (
    <>
    <h2>GifExpertApp </h2>
    <AddCategory setCategories = {setCategories}/>
    <hr/>
    {/* <button onClick={handledAdd}>Agregar</button> */}

        <ol>
          {
            // categories.map((category, i)=>{ //el map devuelve una funcion q modifique el arreglo se lo pasa dos valores el primero(category) el elemento del arreglo y el segundo (i) el indice del elemento
            //   return <li key={i} >{category} </li> //no debe ser el index del map
            // })

            categories.map(category=>(
              
              <GifGrid key={category} category ={category}/>
              
            ))







          }
        </ol>

    </> 
  )
}
