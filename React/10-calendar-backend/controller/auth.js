
const { response } = require('express')
//aqui solo se importa para tener el autocomplete
const { validationResult } = require('express-validator')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')


//para hacer el codigo mas legible se hace por separado las funciones y se exportan como esta abajo como objeto

const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body
    try {

        let usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }

        usuario = new Usuario(req.body)

        //encriptar contraseña
        const salt = bcrypt.genSaltSync(); //esta es una funcion para encriptar la contraseña, digamos q lo q hace es mediante vueltas (se especifica el numero de vueltas sino toma 10) encripta la contraseña (el funcionamiento no es importante)

        usuario.password = bcrypt.hashSync(password, salt) //aqui se especifica cual es la contraseña y cuantas vueltas y se guarda encriptada



        await usuario.save()


        //generar JWT --> json web token
        const token = await generarJWT(usuario.id, usuario.name)


        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'pliss call the admin'
        })

    }


}





const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body

    //la validacion de aqui se hace en un archivo a parte para q sea mas pequeño el codigo 

    try {

        const usuario = await Usuario.findOne({ email })

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese correo'
            })

        }

        const validPassword = bcrypt.compareSync(password, usuario.password)
        if (!validPassword) {

            return res.status(400).json({
                ok: false,
                msg: 'password Incorrecto'
            })

        }

        const token = await generarJWT(usuario.id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })





    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'pliss call the admin'
        })

    }






}


const rivalidarToken = async (req, res = response) => {

    const uid = req.uid;
    const name = req.name;

    const token = await generarJWT(uid, name)

    res.status(201).json({
        ok: true,

        token
    })

}




module.exports = {
    crearUsuario,
    loginUsuario,
    rivalidarToken


}