import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
// import { MarvelScreen } from '../components/marvel/MarvelScreen'
// import { DcScreen } from '../components/dc/DcScreen'
// import { SearchScreen } from '../components/search/SearchScreen'
// import { NavBar } from '../components/ui/NavBar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    {/* <NavBar/> */}
    <Routes>
        {/* El Routes es como un switch en JS digamos q en caso q se cumpla el path  se va a mostrar el componente por eso se mantiene el login y se quita el navbar no tiene sentido dar opcion de mostrar los demas si no se pasa por un login  */}



        {/* <Route path='/' element={<MarvelScreen/>}/>
        <Route path='/marvel' element={<MarvelScreen/>}/>
        <Route path='/dc' element={<DcScreen/>}/>
        <Route path='/search' element={<SearchScreen/>}/> */}

        <Route path='/login' element={

          <PublicRouter>
            <LoginScreen/>
          </PublicRouter>
        }/>


        <Route path='/*' element={
          <PrivateRouter>
                                          {
                                            //para hacer uso de rutas condicionales o privadas o para poner restriccion se crea una ruta la cual esta dentro de un componente o sea, se crea un componente el cual tendra como hijo las demas rutas, en ese componente se pone la restriccion en este caso estar logueado y si es el caso se muestra el componente hijo 
                                          }

            <DashboardRouter/>
          </PrivateRouter>
            }/> 
    </Routes>
    </BrowserRouter>
  )
}
