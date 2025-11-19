const moment = require("moment");

const isDate = (value) => { //aqui se pasa por parametro el valor pq al poner en el custom la funcion ese parametro es el valor del check, primero se valida q exista y luego se pasa por el moment la variable de la fecha y el moment tiene una funcion para saber si es una fecha valida 
    if(!value){
        return false
    }
    const fecha = moment(value)

    if(fecha.isValid()){
        return true
    }else{
        return false
    }
}


module.exports = { isDate };


