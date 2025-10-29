import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { removeError, setError } from '../../action/ui'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterWithEmailPasswordName } from '../../action/auth'








export const RegisterScreen = () => {


  const {msgError} = useSelector(state=> state.ui)


  const dispatch = useDispatch();



  const [form, setForm] = useState({
    name:'Mario',
    email:'spmario333@gmail.com',
    password:'123456',
    password2:'123456'
  })

  const {name, email, password, password2} = form
  const handleInputChange= ({target}) => {
    setForm({
      ...form,
      [target.name]:target.value
    })
    
  }

const handleRegister = (e)=>{
  e.preventDefault();
  if(isFormValid()){
    dispatch(startRegisterWithEmailPasswordName(email,password,name))
  } 
}

const isFormValid = () =>{

  if (name.trim().length===0) {
    dispatch(setError('name is required!!!'))
    return false
    
  }else if(!validator.isEmail(email)){
      dispatch(setError('The value is not a email'))
      return false
  }else if(password2!==password || password.length<5){

    dispatch(setError('The field password is not valid'))
    return false
  }
  dispatch(removeError())
  return true

}




  return (
    <>
        <h3 className='auth__title'>Register</h3>
        

        {msgError && (
          <div className='auth__alert-error'>{msgError}</div>
        )}



        <form
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={handleRegister}
        >
          <input
            type='text'
            placeholder='Name'
            name='name'
            className='auth__input'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />
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
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            className='auth__input'
            value={password2}
            onChange={handleInputChange}
          />

          <button 
          className='btn btn-primary btn-block mb-5'
          type='submit'
          
          
          >
            Register
          </button>


            <Link 
            to='/auth/login'
            className='link'
            >Already registered</Link>


        </form>
    </>
  )
}
