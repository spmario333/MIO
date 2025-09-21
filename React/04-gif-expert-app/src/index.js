import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root')); //al parecer en el salto de version se actualiza a que el lugar donde renderizar se guarda con la funcion createRoot y aqui se guarda en una variable q contiene el ReactDOM y ya por defecto donde se quiere mostrar y solo queda renderizar el componente(digo el ReactDOM porq ya la variable tiene las funciones como la .render) antes se creaba dos variables una lo q se quiere mostrar, donde lo quiero--> y se usaba el ReactDOM.render 
root.render(
  
    <GifExpertApp />
  
);


