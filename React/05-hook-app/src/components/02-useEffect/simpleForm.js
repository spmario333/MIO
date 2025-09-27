import { useEffect, useState } from "react"
import { Message } from "./Message";

 


export const SimpleForm = () => {

    
    
    
    
    
    const [formState, setFormState] = useState({
        name:'',
        email:''
    })
    
    
    const {name , email} = formState;
    
    useEffect(()=>{
        //aqui dentro va lo q se va ejecutar
        console.log('hey!')
    },[]); //si dentro del segundo elemento [] no hay nada lo q este dentro del useEffect solo se ejecuta una vezen otro caso se ejecuta cuando se ejecute lo q se  ponga dentro del arreglo
    
    useEffect(() => {
      console.log('se modifico el email')
    
    }, [email])
    useEffect(() => {
      console.log('se ejecuta cuando se renderiza la primera vez')
    
    }, [])
    useEffect(() => {
      console.log('se modifico el name')
    
    }, [name])


    
    
    const handleInputChange = ({target}) =>{
        setFormState({

            ...formState,
            [target.name]: target.value //se pudiera hacer name : target.value pero es mejor asi para q sirva tambien para correo
        })
    
    }



    




    return(
        <>
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

            {(name==='123')&&<Message/>}
        </>
    )




 }