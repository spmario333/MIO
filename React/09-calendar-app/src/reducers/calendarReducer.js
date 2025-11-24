import moment from "moment";
import { types } from "../types/types";

// {
//       id: new Date().getTime(),
//       title: 'cumpleaños del jefe',
//       start:moment().toDate(),
//       end: moment().add(2,'hours').toDate(),
//       bgcolor: '#fafafa',
//       note:'Comprar cake',
//       user:{
//         _id: '123',
//         name:'Mario'
    
//       }
//     }

const initialState = {
    events:[],
    active: null
}

export const calendarReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.eventSetActive:
          return {
            ...state,
            active: action.payload
            
          }
          case types.eventAddNew:
            return{
              ...state,
              events: [...state.events, //para tomar los valores de dentro del arreglo q esta dentro del objeto hay q llamat con el operador express al objeto punto el hijo para q mantenga los valores
                action.payload
              ]
            }
            case types.eventClearActiveEvent:
              return{
                ...state,
                active:null
              }
            case types.eventUpdated:

              return {
                ...state,
                events: state.events.map(
                  events=>(events.id === action.payload.id)? action.payload : events
                )
              }
            case types.eventDeleted:
              return {
                ...state,
                events: state.events.filter(events=>events.id!==state.active.id ),
                active: null
              }
              case types.eventLoaded:
                return{
                  ...state,
                  events: [...action.payload]
                }
              case types.eventClearState:
                return{
                  events:[],
                  active: null
                }
    
        default:
            return state;
    }
}