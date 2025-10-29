import Swal from 'sweetalert2'

import { types } from "../types/types";
import { firebase, googleAuthProvider, } from "../firebase/firebase-config";
import { FinishLoading, StartLoading } from "./ui";
import { logoutCleaning } from './notes';




export const startLoginEmailPassword = (email, password) =>{ //esta funcion lo q hace es disparar otra funcion pero luego de un tiempo lo mas seguro es q se quiera hacer un async await  
    return (dispatch)=>{
        dispatch(StartLoading())
        
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user})=>{
            dispatch(login(user.uid,user.displayName))
            dispatch(FinishLoading())


        })
        .catch(e=>{
            console.log(e) 
            dispatch(FinishLoading())
            Swal.fire('Error',e.message, 'error')
        }
        
    )
        
    }
}


// export const startRegisterWithEmailPasswordName = (email,password,name) =>{
    
//     return (dispatch)=>{


        

//         firebase.auth().createUserWithEmailAndPassword(email,password)   //como es una funcion asincrona se tiene q resolver mediante  un funcion callback por eso se pasa en el return la funcion callback pasandole el dispatch para ejecuta la accion del login dentro, mediante la funcion de firebase auth, createUserWithEmailAndPassword se crea un nuevo perfil contenido en UseCredential dentro de esto esta un objeto user que contiene toda la informacion del usuario 
//         .then( async({user})=>{ //aqui se desestructura el user

//             await user.updateProfile({displayName: name})
//             dispatch(
//                 login(user.uid, user.displayName)
//             )

//         })
//         .catch(e=>{
//             console.log(e)
//             // Swal.fire('Error',e.message, 'error')
//         })
        


//     }

// }



export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}



export const startGoogleLogin = () =>{

    return (dispatch)=>{

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(login(user.uid,user.displayName))
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

export const startLogout = () =>{

    return async (dispatch)=>{
        await firebase.auth().signOut();//esta funcion es para desloguearse

        dispatch(logout())
        dispatch(logoutCleaning())
    }
}


export const logout = () =>({
    type: types.logout
})