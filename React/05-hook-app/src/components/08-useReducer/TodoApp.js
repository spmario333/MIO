import React, { useEffect, useReducer, useState } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { TodoList } from './components/TodoList'


const init = ()=>{   //esta funcion va a devolver el initialState o sea el primer objeto por lo q ahora se declara como arreglo vacio

    return JSON.parse(localStorage.getItem('todos')) || []


  // return [{
  //   id: new Date().getTime(),
  //   desc: 'AprenderReact',
  //   done: false
  // }]
}


export const TodoApp = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init)
  
  const [formValue, setFormValue] = useState('')
  
  console.log(todos)
  useEffect(() => {
      
      localStorage.setItem('todos',JSON.stringify(todos)) //se guarda en el navegador local pero solo como algo en cache se borra y se pierde, el  Json es para guardar en string pq eso solo guarda en string  
    
      
    }, [todos])


  const handleSubmit = (e) =>{
    e.preventDefault();

    if (formValue.trim().length<2) {
      return;
    }
    
    const newTodo = {
      id: new Date().getTime(),
      desc: formValue,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
    resetInput();

    //el useReducer tiene como argumento un dispatch este es el q se encarga de pasar el action a los otros componentes seeria [state,dispatch]
    //o sea el useReducer tiene el estado, un dispatch q al hacer el nuevo objeto del estado se hace una accion y actoseguido el dispatch q se encarga de pasar todo a la funcion reducer q se encarga de especificar q hacer en cada caso hasta el momento seria [estado,  dispatch]=useReducer(funcion,estadoInicial)

  }

  const handleInputChange = ({target}) =>{
    
    setFormValue(target.value)


  }

  const resetInput = ()=>{
     setFormValue('');
  }


  const handleDelete = (todoId) =>{


    console.log(todoId)
    const action = {
        type: 'delete',
        payload : todoId
    }

    dispatch(action)

  }

  const handleToggle =(todoId)=>{
    dispatch({
      type:'toggle',
      payload: todoId
    })
  }




    return (
    <div>
        <h1>TodoApp {todos.length}</h1>
        <hr/>
        <div className='row'>
          <div className='col-7'>
            

              {/*TodoList,todos,handleDelete, handleToggle*/}

              <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
              />


              {/* <ul className='list-group list-group-flush'>
                  {
                    todos.map((todo,i)=>(
                  
                      <li 
                      key={todo.id}
                      className='list-group-item'
                      >
                            <p 
                            className={`${todo.done && 'complete'}`}   //aqui se utiliza esa nomenclatura solo para poder poner una condicion y en caso cumplida darle ese nombre a la clase 
                            onClick={()=>handleToggle(todo.id)}
                            >{i+1}.{todo.desc}</p>
                            <button
                              className='btn btn-danger'
                              onClick={()=>handleDelete(todo.id)}

                            >
                              Borrar</button>
                      </li>
                    ))
                  }
              </ul> */}


          </div>

          <div className='col-5'>

            <h4>Agregar TODO</h4>
            <hr/>
              <form onSubmit={handleSubmit}>
            
                  <input
                  type='text'
                  className='form-control'
                  name='description'
                  placeholder='Aprender ...'
                  autoComplete='off'
                  onChange={handleInputChange}
                  value={formValue}
                  />

                  <button 
                  type='submit'
                   className='btn btn-outline-primary mt-1 btn-block '

                   >

                        Agregar
                
                   </button>

              </form>
          </div>


        </div>

        

        
    </div>
  )
}


