/** /api/events
 */




const { Router } = require("express");
const { validarJWT } = require("../middleware/validar-jwt");
const { getEvent, makeEvent, updateEvent, deleteEvent } = require("../controller/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const { isDate } = require("../helpers/isDate");
const router = Router()






router.use(validarJWT) //con este codigo se utiliza la funcion de validacion en todas las rutas es para optimizar el codigo 

//obtener eventos
router.get('/'/*seria lo mismo q poner aqui validarJWT */,getEvent)

//crear eventos
router.post('/',[
    check('title','No existe el titulo').not().isEmpty(),
    check('start','No existe la fecha inicial').custom(isDate),
    check('end','No existe la fecha inicial').custom(isDate),
    validarCampos
],makeEvent)

//update evento
router.put('/:id',updateEvent)

//eliminar evento
router.delete('/:id',deleteEvent)

module.exports= router;