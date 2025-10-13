import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { types } from "../../types/types"




export const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload:{
        name:'Mario',
        login:true
      }
    }) 
    const lastPath  = localStorage.getItem('lastPath')
    navigate(lastPath,{replace:true}) //el customhook useNavigate es una funcion para navegar o pasar para otra web aqui la guardo en otra variable y por parametro se pasa la direccion, tambien se le pasa por parametro una segunda opcion que puede ser cualquier restriccion o condicion en este caso se usa la opcion replace q lo q hace es q remplaza la vista o sea cuando de en loguear y luego das en regresar no regresa a login pq remplaza la vista no la cambia 
    

  }




  return (
    <div className="container mt-5">
        <h1>LoginScreen</h1>
        <hr/>

        <button 
          className="btn btn-primary"
          onClick={handleLogin}
        >  
            Login 
        
        </button>

    </div>
  )
}