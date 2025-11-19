const {response} = require('express')
const {validationResult} = require('express-validator')

//esto es un custom middleware q va a validar los campos 


const validarCampos = (req, res=response, next) => {

    const errors = validationResult(req)

     if (!errors.isEmpty()) {  //con el validation results guardado en errors se ve si existieron errores de validacion y en caso de ser mas de uno se va a mapear 
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        })
    }

    next();


}


module.exports = {
    validarCampos
}




