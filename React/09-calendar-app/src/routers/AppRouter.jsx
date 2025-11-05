import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { LoginScreen } from '../components/auth/LoginScreen'


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            
            <Switch>

                <Route exact path='/login' component={LoginScreen} />
                <Route exact path='/' component={CalendarScreen} />
                <Redirect to='/' />

            </Switch>

        </div>
    </BrowserRouter>
  )
}
