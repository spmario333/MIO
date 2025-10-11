import { heroes } from "../data/heroes"

export const getHeroeByPublisher = (publisher) => {

    const validValuePublisher = ['DC Comics','Marvel Comics']


    if (!validValuePublisher.includes(publisher)) {
    throw new Error(`${publisher} no es una opcion valida`);
}

    return heroes.filter(heroes => heroes.publisher === publisher)
    
}