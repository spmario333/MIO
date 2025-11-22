
const baseURL = process.env.REACT_APP_API_URL



export const fetchSinToken = (endpoint, data, method = 'GET') => {

    /*Para no hacer un fetch ya que puede variar de acuerdo a si es get, si tiene token etc se crea esta funcion q va a tener como parametro el endpoint q seria si es auth o events por ejemplo (localhost:4001/api/endpoint) 
     */

    const url = `${baseURL}/${endpoint}`

    //se guarda la url q se pasara en el fetch

    if (method === 'GET') {
        return fetch(url)
    } else {

        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
            /*Aqui se pasa el url como primer parametro del fetch luego un objeto q posee si es get o post ..(method), el header q no se aun bien porq se usa asi segun se explica pq el tipo de backend es eso, luego y ultimo se pasa como json la data 
             */
        })


    }



}


export const fetchConToken = (endpoint, data, method = 'GET') => {


    const url = `${baseURL}/${endpoint}`
    const token = localStorage.getItem('token') || ''



    if (method === 'GET') {
        return fetch(url,{
            method,
            headers:{
                'x-token': token
            }
        })
    } else {

        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token

            },
            body: JSON.stringify(data)

        })


    }



} 