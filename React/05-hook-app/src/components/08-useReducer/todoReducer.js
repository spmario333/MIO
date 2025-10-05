

export const todoReducer = (state = [],action) =>{

    switch (action.type) {
        case 'add':
            
           return [...state,action.payload]
        
        case 'delete':
            
           return state.filter(state=>state.id!==action.payload)  


        case 'toggle-old':
            
           return state.map(todo=>{
            if (todo.id===action.payload) {              //aqui para poder modificar un objeto especifico del arreglo se mapea se crea una condicion y cuando se cumpla se utiliza el operador expres para mantener los demas parametros iguales y se cambia el deseado en caso q no se encuentre se retorna igual todo 
               return{
                  ...todo,
                  done: !todo.done
                  
               }
            }else{
               return todo;
            }
           })

           case 'toggle':
            
           return state.map(todo=>                       //aqui se hace igual lo de arriba pero con un operador ternario
            (todo.id===action.payload)
            ?{...todo,done:!todo.done}
            :todo
           )
    
        default:
            return state;
    }

}