const getImages = async () =>{
    
    const apiKey = 'xKJWI2sTDZ8UJ9Gg1ALev1PBpbnLeNwD';

    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
    const data = await resp.json();
    
    const {url} = await data.data.images.original; 

    const img = document.createElement('img');
    
    img.src= url;

    document.body.append(img);

    console.log(data)
}

getImages();