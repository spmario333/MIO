import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { LoginScreen } from '../components/auth/LoginScreen'
import { useDispatch, useSelector } from 'react-redux'
import { startChecking } from '../actions/auth'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'


export const AppRouter = () => {

  const dispatch = useDispatch()

  const { checking, uid } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  if (checking) {
    return (<h5>Espere...</h5>)
  }


  return (
    <BrowserRouter>
      <div>

        <Switch>
          {/* <Route exact path='/login' component={LoginScreen} /> */}
          <PublicRouter
            exact
            path='/login'
            component={LoginScreen}
            isLoggedIn={!!uid}
          />
          {/* <Route exact path='/' component={CalendarScreen} /> */}
          <PrivateRouter
            exact
            path='/'
            component={CalendarScreen}
            isLoggedIn={!!uid}
          />
          <Redirect to='/' />

        </Switch>

      </div>
    </BrowserRouter>
  )
}
