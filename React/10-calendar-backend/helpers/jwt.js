const jwt = require('jsonwebtoken');

// para generar un json web token se instala el jsonwebtoken 
const generarJWT = (uid,name) =>{  // se empieza creando una funcion q se le pasa por parametro los datos q va a cifrar en el JWT 

    return new Promise ((resolve,reject)=>{ //se retorna mediante una promesa que tiene el resolve y reject como es promesa se usa mediante una solicitud y puede fallar o no por eso usa el resolve o reject 

        const payload = {uid,name}
        

        jwt.sign(payload, process.env.SECRET_JWT_SEED, { // se usa el jwt y llama a la funcion sign para crearlo primer parametro lo q se quiere convertir en token, segundo una palabra clave q es preferible usa una variable de entorno , tercerlo el tiempo q durara el token este caso 2 horas , por ultimo una funcion callback para el tratamiento de error en caso de el un reject q puede ser el catch y sino el resolve del token 
            expiresIn: '2h'
        },(err,token)=>{

            if (err) {
                console.log(err)
                reject('no se pudo generar el token')
            }

            resolve(token);

        })

    })

}




module.exports = {
    generarJWT
}