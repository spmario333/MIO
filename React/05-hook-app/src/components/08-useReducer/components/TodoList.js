import React from 'react'

export const TodoList = ({todos,handleDelete,handleToggle}) => {
  return (
    <div>

                <ul className='list-group list-group-flush'>
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
                </ul> 
    </div>
 )
}

                
                
                
                
                
                
                