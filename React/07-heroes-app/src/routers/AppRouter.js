import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
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

        <Route path='/login' element={<LoginScreen/>}/>


        <Route path='/*' element={<DashboardRouter/>}/> 
    </Routes>
    </BrowserRouter>
  )
}
