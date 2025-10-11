import { Route, Routes } from 'react-router-dom'



import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { NavBar } from "../components/ui/NavBar"
import { HeroeScreen } from '../components/heroe/HeroeScreen'


export const DashboardRouter = () => {
  return (
    <>
<NavBar/>

    <div className='container'>

        <Routes>
            <Route path='/marvel' element={<MarvelScreen/>}/>
            <Route path='/dc' element={<DcScreen/>}/>
            <Route path='/search' element={<SearchScreen/>}/>
            <Route path='/heroes/:heroeID' element={<HeroeScreen/>}/>
            <Route path='/' element={<MarvelScreen/>}/>
        </Routes>
        
    </div>

    </>
  )
}




