const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config()
const cors = require('cors')

console.log(process.env)



//Crear el Servidor Express

const app = express();

//base de datos

dbConnection();

//CORS
app.use(cors())


//Directorio Publico

app.use(express.static('./public')) //use es como middleware 
/*
el app viene siendo el express a la hora de usarlo, lo de dentro es
definiendo la ruta publica y no es porq diga public sino es q casi siempre
se usa la carpeta public para eso dentro contiene el index.html y style.css

*/


//Lectura y parseo del body

app.use( express.json())

//esto de arriba procesa la informacion q venga en un .JSON



//Rutas
app.use('/api/auth', require('./routes/auth'))

//en este se usa la ruta del navegador q va contener lo q se haya exportado en la ruta q aparece a la derecha q es local 



//Escuchar peticiones 
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})