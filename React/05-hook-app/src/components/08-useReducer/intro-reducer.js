


const initialState = [{
    id: 1,
    to_do: 'comprar pan',
    done : false
}];


//este estado inicial va ha hacer hay q fijarse bien ... un arreglo con un primer objeto no un objeto.    El use Reducer una funcion q va a modificar un estado solo mas trabajo q hasta ahora seria solo complicacion, se implemenenta el use reducer(To_doReducer) esta tendra el estado inicial y segundo parametro la accion q realizara, luego se crea en este ejemplo el objeto q se quiere añadir, y la accion q es un objeto q es del tipo agregar y el objeto q se quiere agregar por ultimo se llama la funcion y se pasa la accion y el estado inicial 



const to_doReducer = (state= initialState, action)=>{

    if(action?.type === 'agregar'){
        return [...state,action.payload]
    }

    return state;

}

let To_do = to_doReducer();


const newTo_do ={
    id: 2,
    to_do: 'comprar leche',
    done : false
}


const todoActionAgregar = {
    type:'agregar',
    payload: newTo_do
}

To_do = to_doReducer(To_do, todoActionAgregar)

console.log(To_do)