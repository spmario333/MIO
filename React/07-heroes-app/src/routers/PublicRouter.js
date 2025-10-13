import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { Navigate } from 'react-router-dom'

export const PublicRouter = ({children}) => {

    const { user } = useContext (AuthContext)
    const lastPath=localStorage.getItem('lastPath') || '/marvel'
  return user.logged 
         ? <Navigate to={lastPath}/>
         : children   
         {//Aqui se implementa el componente q tendra el otro componente de las rutas que no es mas q si el usuario esta logueado mandalo a la pestaña del home sino mandalo al login q es el children 
              }


}