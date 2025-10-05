import React, { Component, useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

  // para q el context pueda llegar a todos los hijos se pone como un Component padre del approuter q es el padre y ademas se le pasa al context el valor q se quiere heredar como una etiqueta value
  
  const [user, setUser] = useState({})


  return (

      <UserContext.Provider value={{
        user,
        setUser
      }}>

        <AppRouter/>
      
      </UserContext.Provider>
   
  )
}
