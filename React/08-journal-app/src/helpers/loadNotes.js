import { db } from "../firebase/firebase-config"



export const loadNotes = async(uid) => { //se implementa la funcion para cargar notas aqui para q sea mejor de ver, se pasa el id del usuario para q sea solo las notas de ese usuario ya q se guardan por esa ruta 
    const notesSnap = await db.collection(`${uid}/journal/notes`).get(); // como se guarda en la base de datos se referencia a esta mediante las collecciones y la ruta en q se encuentra y por ultimo el get 
    const notes = []

    notesSnap.forEach(snapHijo=>{   //con el forEach se recorre y en el arreglo creado anteriormente se empiezan a meter todos las notas donde el hijo de snapHijo el id es el id de la nota y la data seria lo q compone el objeto por eso se desestructura 
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    
    return notes
}



//react-journal
//dxi71jmfy
//https://api.cloudinary.com/v1_1/dxi71jmfy/upload