export const getGif = async (category)=>{

        
        console.log(category);
        const apiKey='sthzBWFP5Pg7nFfxuzcZfjDXgCQ65Em0'
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=4`
        const resp = await fetch(url); //el primer url es para hacer una peticion y q devuelva los datos necesarios contenidos en el (json) mediante la funcion fetch
        const {data} = await resp.json(); //el json tiene toda la data esa se guarda en la misma data desestructurada alli se toma lo importante esa data es un arreglo
        
        const gif = data.map(img=>{             //aqui se guarda en la variable gif los datos del json q se requieren como se habia hecho anteriormente en otros lados se coge mediante el estado anterior de la data(img) y se retorna un arreglo mediante el map q devuelve un nuevo arreglo mediante las modificaciones q se le hacen al anterior  
            return{

                id: img.id,
                title: img.title,                           
                url: img.images.downsized_medium.url,
                }
            })
            return gif;
            
        }