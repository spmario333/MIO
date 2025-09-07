const saludar = function (nombre) {

    return `Hola ${nombre}`;
    
}

// Es mejor hacer la funcion asi para q no se pueda modificar el valor


const saludar1 = (nombre)=>{  // para hacer funcion de flecha en caso de mantener el return y quitar el function se pone la flecha y se mantiene las llaves  
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`; //en este caso si se quita el return tambien las llaves 



console.log(saludar)
console.log(saludar1)
console.log(saludar2)



const getUser = () =>{
    return {
        uid : 'ABC123',
        user : 'El_Papi'
    }
}

// convertir en una funcion de flecha q devuelve el objeto, como hay q quitar el return y las llaves para definir el objeto se encierra entre parentesis 


const getUser1 = () => (
    {
        uid : 'ABC123',
        user : 'El_Papi'
    }
)

console.log(getUser())
console.log(getUser1())


const getUsuarioActivo = (nombre)=>({
uid: 'ABCD567',
username: nombre
});

const usuarioActivo = getUsuarioActivo('Mario'); 
console.log(usuarioActivo)