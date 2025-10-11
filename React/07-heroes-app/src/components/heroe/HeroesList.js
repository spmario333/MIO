import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selector/getHeroeByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroesList = ({publisher}) => {

    const heroe = useMemo(() =>  getHeroeByPublisher(publisher), [publisher])


  return (
    <div className='card-columns'>
        

            {
            heroe.map(heroe=>
                <HeroeCard 
                key={heroe.id}
                {...heroe}
                />
            )
            }
        
    </div>
  )
}
