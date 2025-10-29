import Swal from "sweetalert2"
import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"
import { fileUpload } from "../helpers/fileUpload"

 export const startNewNote = () => {
    return async (dispatch,getState)=>{ //para esta accion como es asyncrona se tiene q hacer en un callback y asi se llama el dispatch y como segundo la funcion con la cual se obtiene el state contenidos en el store 
        
        
        const {uid} = getState().auth //se desestructura el uid para q al anotar la nota sea por el id del usuario o sea para añadir una nota es por una ruta q es la q esta abajo
        

        const newNote = {           //se crea el objeto q contendra las partes de la nota 
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote) //para añadir a la base de datos se utiliza el .collection y dentro l ruta donde se va a añadir  (lo primero de la ruta es el id del user/en la parte de journal/ notas) y con la funcion add se añade el objeto q tiene las partes de la nota 
        dispatch(activeNote(doc.id,newNote))
        
    }
 }

 export const activeNote = (id,note) =>({
type: types.notesActive,
payload:{
    id,
    ...note
}
 })


 export const startLoadingNotes = (uid) =>{
    return async (dispatch)=>{
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
 }


 export const setNotes = (notes) =>({
    type: types.notesLoad,
    payload:  notes
 })


 export const startSaveNote = (note) =>{  //se pasa la nota con la actualizacion o lo  nuevo q se escribio en el input 
    return async (dispatch, getState)=>{  //se pasa por parametro el dipatch para ejecutar accion y el getstate para obtener el id del usuario para modificar la base de datos ya q el identificador de esa es por id de usuario

        const {uid} = getState().auth;  

        if (!note.url) {
            delete note.url;  //si hay un parametro null no deja añadir a la base de datos 
            
        }


        const noteToFirestore = {...note}//se crea nuevo objeto con parametros de la nota para poder eliminar el id q no se va a pasar 
        delete noteToFirestore.id 
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore) //se actualiza la bd 

        dispatch(refreshNote(note.id, noteToFirestore))
        Swal.fire('Saved',note.title, 'success')

    }
 }


 export const refreshNote = (id, note) =>({
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id,
            ...note
            
        }

    }
})

export const startUploading = (file) => {
    return async(dispatch,getState)=>{

        const  {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick:false,
            onBeforeOpen: ()=>{
                Swal.showLoading();
            }
        })
        
        const fileUrl = await fileUpload(file)
        activeNote.url= fileUrl;

        dispatch(startSaveNote(activeNote))

        Swal.close()
    }
}


export const startDeleting = (id) => {
    return async (dispatch, getState)=>{

        const {uid} = getState().auth

        await db.doc(`${uid}/journal/notes/${id}`).delete()

        dispatch(deleteNote(id))

    }
}


export const deleteNote = (id) =>({

    type: types.notesDelete,
    payload : id
})


export const logoutCleaning = () => ({
    type: types.notesLogoutCleanig,
    

})