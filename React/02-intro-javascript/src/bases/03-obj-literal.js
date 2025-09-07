
const persona ={
    nombre : 'Mario',
    apellido : 'Rose',
    edad: 27,
    direccion : {
        ciudad : 'New York',
        zip : 21242516,
        lat : 21.11355,
        lng : 34.21551,

    }
};

console.table(persona); //imprimir en tabla

const persona2 = persona;   //esto no se debe hacer pq hace una referencia en memoria o sea es como un acceso directo si cambia persona2 cambia persona
persona2.nombre = 'Peter';

console.log(persona)

const persona3 = {...persona}; //deberia ser asi 
persona3.nombre = 'Culo';

console.log(persona3)
