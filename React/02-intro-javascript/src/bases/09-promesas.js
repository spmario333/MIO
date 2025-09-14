import { getHeroeById } from "./bases/08-imp-expo";

// const promesa = new Promise((resolve, reject) => { //a la hora de crear una promesa se le pasa dos parametros uno para cuando se cumpla y elotro para si no se hace resolverlo seria el resolve and reject
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe)
//     //reject('no existe el heroe')
//   }, 2000);
// });


// promesa.then((heroe)=>{
//     console.log('heroe:',heroe)//asi se maneja si se cumple y debajo si da error
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id)=>{


    
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
        const p1 = getHeroeById(id);
        if(p1){
            resolve(p1);
        }else{
            reject('No se encontro el heroe')
        }
    },2000)

    });
}

getHeroeByIdAsync(10).then(heroe=>console.log('Heroe:', heroe))
.catch(err=>console.warn(err))


//digamos q las promesas pueden cumplirse o no, o sea dar un resultado o fallar por eso el resolve y reject si se condiciona puedes trabajar con el resolve y en consecuencia con el then debajo hacer algo en especifico en caso de ser satisfactorio en caso contrario arriba con la condicion en caso de fallar se usa el reject agarrandolo debajo con el catch como error  
