import React from 'react'
import { HeroesList } from '../heroe/HeroesList'

export const MarvelScreen = () => {
  return (
    <div>
        <h1>MarvelScreen</h1>
        <hr/>

        <HeroesList publisher='Marvel Comics'/>
    </div>
  )
}
