import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRouter = ({children}) => {

    const { user } = useContext (AuthContext)

    const location = useLocation()

    
    location.search
    ?localStorage.setItem('lastPath',location.pathname+location.search)
    :localStorage.setItem('lastPath',location.pathname)

    





  return user.logged 
         ? children
         : <Navigate to='/login'/>   
         {//Aqui se implementa el componente q tendra el otro componente de las rutas y de esta manera se vuelven privadas luego de la restriccion.... al pasar children se pasan los componentes  hijos o sea esta props se convierte en los componente hijos
            }


}
