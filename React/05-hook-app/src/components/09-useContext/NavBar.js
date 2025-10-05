import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>UseContext</Link>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
                <NavLink activeclassname='active' className='nav-item nav-link active' to='/'>Home</NavLink>
                <NavLink activeclassname='active' className='nav-item nav-link' to='/about'>About</NavLink>
                <NavLink activeclassname='active' className='nav-item nav-link' to='/login'>Login</NavLink>
                {/*buscar el exact por q no funciona en el navLink*/}
            </div>

        </div>
    </nav>
  )
}
