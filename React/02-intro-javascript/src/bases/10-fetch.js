
const apiKey = 'xKJWI2sTDZ8UJ9Gg1ALev1PBpbnLeNwD';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


//esta peticion del fetch devuelve una promesa o mejor dicho el fetch devuelve una promesa y esta se guarda en la variable peticion, debajo se empieza a usar los then 

peticion
.then( resp=>resp.json())
//este primer then agarra lo q devolvio la peticion y dentro de ella hay un metodo json q tiene mas informacion, ese json tambien es una promesa (supongo q se puede usar el resp.json().data) como es un promesa se usa otro then 
.then(({data})=>{

    const {url}= data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);


//en el orden primero se desestructura para tomar solo el url 
//luego se guarda el nuevo espacio creado en el dom para una imagen en la variable img
//al ser del tipo imagen se llama la propiedad src o source y se le da valor del url 

    console.log(data.images.original.url)
//como dentro de data hay otro valor q se llama igual se desestructura y se empieza a llamar hasta llegar a donde se quiere
})

//ya este imprime la data q se encuentra en el json 
.catch(console.warn)

//este catch es el q procesa los errores de todas las promesas 