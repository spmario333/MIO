import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../action/auth';





export const LoginScreen = () => {

  const dispatch = useDispatch();


  const [form, setForm] = useState({
    email:'',
    password:''
  })
  
  const {email,password} = form
  
  const handleInputChange= ({target}) => {
    setForm({
      ...form,
      [target.name]:target.value
    })
  }

  const handleLogin = (e) =>{
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password)) //el dispatch como es en el useReducer se le pasa la accion y ejecuta q no es mas q pasarle directo el objeto con los valores objeto q seria la accion => action{type: login, payload:{uid,name}}

  }

  const handleGoogleLogin = () =>{
    dispatch(startGoogleLogin())
  }

  return (
    <>
        <h3 className='auth__title'>Login</h3>

        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Email'
            name='email'
            className='auth__input'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='auth__input'
            value={password}
            onChange={handleInputChange}
          />

          <button 
          className='btn btn-primary btn-block'
          type='submit'
          
          >
            Login
          </button>
          
         <div 
         onClick={handleGoogleLogin}
         className='auth__social-networks'>
          <p>Login with social networks</p>
            <div 
              className="google-btn"
            >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
         </div>

            <Link 
            to='/auth/register'
            className='link'
            >Create new account</Link>


        </form>
    </>
  )
}
