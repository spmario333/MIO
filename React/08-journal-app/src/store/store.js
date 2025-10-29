import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import { thunk } from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";
import { notesReducer } from "../reducers/notesReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({    //el combineReducer es una herramienta que sirve para almacenar los reducers
    auth: authReducer,
    ui : uiReducer,
    notes: notesReducer
});

export const store = createStore(
    reducers,composeEnhancers(applyMiddleware(thunk)));  //el store como su nombre es como una tienda que dispone de una serie de reducer o funciones que seran usadas dependiendo de donde haga falta, se le pasa los reducer pero como el store solo admite un reducer se utiliza el combineReducer q es como un arreglo de reducer 


