import {heroes} from '../data/heroes';

console.log(heroes)


// const getHeroeById = (id)=>{
//     return heroes.find((heroe)=>{           //esta es la manera larga se pasa por parametro en la funcion find un heroe q como viene de un arreglo heroes no importa lo q se ponga pq se atribuye q sea un heroe se pone una condicion y si lo encuentra el fin devuelve el elemento q cumple con la condicion
//        if(heroe.id===id){
//         return true
//        }else 
//         return false
//     });
// }




// const getHeroeById = (id)=>heroes.find((heroes)=>heroes.id===id); //manera mas corta



export const getHeroeById = (id)=>{
    return heroes.find((heroes)=>heroes.id===id); //el metodo find devuelve el primer elemento que cumple con la condicion de la funcion del propio find
}

// console.log(getHeroeById(2))


export const getHeroeByOwner = (owner) => heroes.filter((heroe)=>heroe.owner===owner);  //el metodo filter devuelve un arreglo de los elemento que cumplen con la condicion de la funcion del propio filter


// console.log(getHeroeByOwner('DC'))