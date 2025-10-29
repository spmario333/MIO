import React, { useEffect, useState } from 'react'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import {
  BrowserRouter,
  Switch,
  
  Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {firebase} from '../firebase/firebase-config'
import { login } from '../action/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { startLoadingNotes } from '../action/notes';








export const AppRouters = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)




  useEffect(() => {  //esto es para cuando se recargue la pagina y borre cache se comunique con firebase y le pregunte si algun usuario esta logueado en caso positivo entra directo con el login
    firebase.auth().onAuthStateChanged((user)=>{ //este metodo es el q pregunta si tiene algun usuario logueado 
      if (user?.uid) {
        dispatch(login(user.uid,user.displayName))
        setIsLoggedIn(true)

        
        dispatch(startLoadingNotes(user.uid))

      }else{
        setIsLoggedIn(false)
      }

      setChecking(false)
    })
  

  }, [dispatch])
  

  if (checking) {
    return  (<h1>Espere...</h1>)
  }






  return (
    <div>
        <BrowserRouter>
            <Switch>
                <PublicRouter path='/auth' isLoggedIn={isLoggedIn} component={AuthRouter}/>
                <PrivateRouter path='/' exact isLoggedIn={isLoggedIn} component={JournalScreen}/>
                <Redirect to='/auth/login'/>
            </Switch>
        </BrowserRouter>
    </div>
  )
} 
