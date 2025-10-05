import React from 'react'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <Router>
        <div>
            

            <NavBar/>
            <div className='container'>

              <Routes>
                <Route exact  path='/about' Component={AboutScreen}/>
                <Route exact path='/login' Component={LoginScreen}/>
                <Route exact path='/' Component={HomeScreen}/>
                {/*buscar por quien cambio el componente redirect en el react-router-dom*/}
              </Routes>
            </div>
 



           



        </div>
    </Router>
  )
}
