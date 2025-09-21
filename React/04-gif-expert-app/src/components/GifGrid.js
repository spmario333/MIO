import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'
import { getGif } from '../helpers/getGif'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({category}) => {

  
  // const [images, setImages] = useState([])
  
  
  // useEffect(() => {
  //   getGif(category)
  //   .then(imgs=>(setImages(imgs))) //el getGif al usar un async y await se convierte en una promesa y al resolverse bien se hace un .then en el cual se utiliza un callback...como el getGif devuelve un gif se coge el estado anterior y se utiliza para actualizar el images con el setimages 
    
  // }, [])
    
const { data,loading } = useFetchGifs(category); 
  
  
  
  return (
    <>
    
    <h3>{category}</h3>
    {loading&&<p>Loading...</p>}
    <div className='card-grid'>
        
        <ol>
            
            {data.map(img=>(
                
                <GifGridItem
                key={img.id}
                {...img}
                
                />
            ))}
            
        </ol>
    
    </div>
    </>
  )
}
