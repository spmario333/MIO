const persona = {
    nombre: 'Tony',
    edad:27,
    clave:'IronMan',
    rango:'soldado',
}


// para desestructurar hay q tener claro q estas referenciando a un objeto o algo q posee dichas propiedades 

const {nombre, edad, clave:nickname} = persona; //como en este caso tambien la clave se le da otro nombre en caso q ese se este usando en otro lado 

console.log(nombre, edad, nickname) 


const userContext = ({nombre, edad, clave, rango = 'Capitan'}) =>{  //aqui se desestructura directo en los parametros q se pasa en la funcion y funciona siemrpe y cuando se pase por parametro una persona en caso de rango se le da un valor en caso q no tenga
    // console.log(nombre, rango) 
    return {
        nombreClave:clave,
        anios: edad,
        latlng:{
            lat:331.214,
            lng: 24.21354
        }
    }
}


const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona); //para desestructurar un objeto de dentro de otro objeto seria de esa manera 
console.log(nombreClave, anios)
console.log(lat , lng) 