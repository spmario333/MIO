import React from 'react';
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';
// const saludo = <h1>Hola Mundo</h1>; //se guarda el elemento de la etiqueta h1 en una variable ya tengo lo q quiero mostrar



const divRoot = document.querySelector('#app')//se guarda en una variable al seleccionar el elemento por el id ya tengo el div donde quiero renderizar

//ReactDOM.render(<PrimeraApp saludo= 'Hola soy Goku' />, divRoot)  //Aqui paso una props q viene siendo una propiedad o una variable q se almacena digamos q en un arreglo llamado props o sea seria algo como props = {saludo : 'Hola soy goku'}

ReactDOM.render(<CounterApp value = {27} />,divRoot)