const {response} = require('express')
const jwt = require('jsonwebtoken')




const validarJWT = (req, res = response, next) => {

    // x-token headers 

    const token = req.header('x-token') // se establece en la query enviar el token para poder usarlo aca, expres tiene para obtener el query este caso se obtienedel header y por el estandar como es un custom se le pone x- no es obligatorio seria algo como ---->(http://localhost:4001/api/auth/renew?x-token=AdsaKDJBafvzsfav54546Dasf)


    if (!token) {
        return res.status(401).json({
            ok:false,
            msg: 'No hay token en la peticion'
        })
    }

    try {
        
        const payload = jwt.verify( //para hacer el proceso inverso o sea descodificar el token se usa el verify y se le pasa el token y la palabra clave en este caso contenida en una variable de entorno 
            token,
            process.env.SECRET_JWT_SEED
        )
        
        const {uid, name} = payload

        req.uid = uid
        req.name = name 

        


        
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg: 'Token no valido'
        })
    }


    next()
}


module.exports = {
    validarJWT
}