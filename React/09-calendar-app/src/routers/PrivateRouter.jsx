import React from 'react'
import { Redirect,Route } from 'react-router-dom'


export const PrivateRouter = ({isLoggedIn,component:Component,...res}) => { // para hacer la rutas privadas como se esta usando el react-router v5  para poder meter dentro de un componente y utilizar las prop se pasa por consola la prop deseada en este caso isLoggedIn se concatenan las demas con ..res y ademas se pasa la funcionalidad component con el nombre Component para poder renderizar el componente hijo 
   
  return  (
    <Route {...res}
      component={(props)=>(
        (isLoggedIn)
        ?(<Component{...props}/>)
        :(<Redirect to='/login'/>)
      )}/>
  )
}

