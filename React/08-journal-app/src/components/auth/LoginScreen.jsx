import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../action/auth';
import validator from 'validator'
import { setError } from '../../action/ui';




export const LoginScreen = () => {

  const {loading} = useSelector(state => state.ui) //selecciona las prop q se pasan en el providerq son los reducers q estan en el store 
  

  const {msgError} = useSelector(state=>state.ui)

  const dispatch = useDispatch();


  const [form, setForm] = useState({
    email:'spmario333@gmail.com',
    password:'123456'
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
    if(!validator.isEmail(email)){
      dispatch(setError('The value is not a email'))
      return
    }
    dispatch(startLoginEmailPassword(email, password)) //el dispatch como es en el useReducer se le pasa la accion y ejecuta q no es mas q pasarle directo el objeto con los valores objeto q seria la accion => action{type: login, payload:{uid,name}}

  }

  const handleGoogleLogin = () =>{
    dispatch(startGoogleLogin())
  }

  return (
    <>
        <h3 className='auth__title'>Login</h3>

        <form 
          onSubmit={handleLogin}
          className='animate__animated animate__fadeIn animate__faster'
          >
            
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

          {msgError && (
          <div className='auth__alert-error'>{msgError}</div>
        )}

          <button 
          className='btn btn-primary btn-block'
          type='submit'
          disabled={loading}
          
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
