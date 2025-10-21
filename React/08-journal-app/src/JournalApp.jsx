import React from 'react'
import { AppRouters } from './routers/AppRouters'
import { Provider } from 'react-redux' //se utiliza el provider para hacer llegar los datos del store en todos los hijos como lo hace el useContext
import { store } from './store/store'

export const JournalApp = () => {
  return (
    <>
    <Provider store={store}>
    
      <AppRouters/>

    </Provider>
    </>
  )
}
