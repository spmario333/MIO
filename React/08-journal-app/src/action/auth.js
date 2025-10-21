import { types } from "../types/types";
import { firebase, googleAuthProvider, } from "../firebase/firebase-config";




export const startLoginEmailPassword = () =>{ //esta funcion lo q hace es disparar otra funcion pero luego de un tiempo lo mas seguro es q se quiera hacer un async await  
    return (dispatch)=>{

        setTimeout(() => {
            dispatch( login(123,'Pedro'))
        }, 3500);
    }
}


export const startGoogleLogin = () =>{

    return (dispatch)=>{

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(useCred => {
            console.log(useCred)
        })

    }

}




export const login = (uid , displayName) =>({ //aqui se crea la accion de login q es un objeto con los datos del usuario logueado  
    type: types.login,
    payload: {
        uid,
        displayName
    }
})