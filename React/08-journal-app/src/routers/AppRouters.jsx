import React from 'react'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

export const AppRouters = () => {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/auth'  component={AuthRouter}/>
                <Route path='/' exact component={JournalScreen}/>
                <Redirect to='/auth/login'/>
            </Switch>
        </BrowserRouter>
    </div>
  )
} 
