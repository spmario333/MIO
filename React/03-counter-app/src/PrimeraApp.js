import React from 'react';

const PrimeraApp = ({saludo})=>{ // Aca se pasa a la funcion la propiedad q se vaya a usar se pudiera hacer como => (props) pero se desestructura para abreviar

   // const saludo = 'Hola mundo';
   // const variableObjCodigo = {
   //    nombre : 'Mario',
   //    edad: 27
   // }

 


   return (
      
      <>
         <h1>{ saludo }</h1>
         {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
         <p>Mi primera aplicacion</p>
      </>

   );
   
   


}


export default PrimeraApp