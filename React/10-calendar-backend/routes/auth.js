/*Rutas de Usuarios /AUTH
 host + /api/auth
 */




const {Router} = require('express')
const {check} = require('express-validator') //--> middleware q valida campos en particular
const router = Router();
const {crearUsuario, loginUsuario, rivalidarToken} = require('../controller/auth');
const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');

router.post(
    '/new',[

        check('name','El nombre es obligatorio').not().isEmpty(),  //aqui el check funciona de manera q se pasa por parametro el campo y seguido el mensaje de error 
        check('email','El email esta mal').isEmail(),
        check('password','La contraseña no cumple con los requisitos').isLength({min:6}),
        validarCampos 


    ],//---> los middlewares q se van a usar se ponen aqui
    crearUsuario
) //aqui se pone la ruta y la peticion q va a hacer pero para no extender el  codigo se importa la funcion q se va utilizar la cual esta en controllers 

router.post('/',[
    check('email','El email esta mal').isEmail(),
    check('password','La contraseña no cumple con los requisitos').isLength({min:6}),
    validarCampos //para validar campos y no tener q tenerlo en los post o peticiones 
], loginUsuario)


router.get('/renew',validarJWT,rivalidarToken)


module.exports = router;