import React, { useContext } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const NavBar = () => {


  const {user,dispatch}= useContext(AuthContext)
  const navigate =useNavigate()

  const handleLogout = () =>{

    navigate('/login', {replace:true})
    dispatch({
      type: types.logout,
      
    })

    
  }


  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

      <Link 
      className='navbar-brand'
      to='/'
      >
        Asociaciones
      
      </Link>

      <div className='navbar-collapse'>  
        <div className='navbar-nav'>

          <NavLink 
          className={({isActive})=>'nav-item nav-link'+(isActive?' active':'')}
          /* Aqui para q marque donde esta situada la navegacion se crea una funcion q retorna la propiedad X de bootstrap pero lo importante es q se le pasa una prop q se llama isActive esta si es verdadera entonces le pone la propiedad de bootstrap active eso es lo q dice la funcion con condiciones */
          to='/marvel'
          >Marvel</NavLink>

          <NavLink 
          
          className={({isActive})=>'nav-item nav-link'+(isActive?' active':'')}
          to='/dc'
          >DC</NavLink>

          <NavLink 
          className={({isActive})=>'nav-item nav-link'+(isActive?' active':'')}
          /* Aqui para q marque donde esta situada la navegacion se crea una funcion q retorna la propiedad X de bootstrap pero lo importante es q se le pasa una prop q se llama isActive esta si es verdadera entonces le pone la propiedad de bootstrap active eso es lo q dice la funcion con condiciones */
          to='/search'
          >Search</NavLink>

        </div>
      </div>


      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>

        <ul className='navbar-nav ml-auto'>

          <span className='nav-item nav-link text-info'>
            
            
            {user.name}
          </span>


          <button 
           
          className='nav-item nav-link btn'
          onClick={handleLogout}>
            
            Logout

          </button>

        </ul>

      </div>



    </nav>
  )
}
