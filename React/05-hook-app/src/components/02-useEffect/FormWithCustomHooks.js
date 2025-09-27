
import { useForm } from "../../hooks/useForm"


 


export const FormWithCustomHooks = () => {

    
    
    
    const [formValue, handleInputChange]=useForm({
        name: '',
        email:'',
        passw:''
    })

    const{name , passw, email} = formValue;
  
    
//a la hora de crear el componente se utiliza un custom hooks en este se configura la funcion handleInputChange la cual se le pasa el evento de escribir en el input y al componente un valor inicial para en caso de q estuviera vacio o sea no es tan necesario, 


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValue)
    }




    return(
        <form onSubmit={handleSubmit}>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name } 
                    onChange={handleInputChange}
                />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="assasa@nxczmn"
                    autoComplete="off"
                    value={ email } 
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="passw"
                    className="form-control"
                    placeholder="*****"
                    value={ passw } 
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
    )




 }