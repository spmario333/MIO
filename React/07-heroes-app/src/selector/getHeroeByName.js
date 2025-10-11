import { heroes } from "../data/heroes"

export const getHeroeByName = (name= '') => {

    if (name.length < 1) {
        return [];
    }
  
  const nam = name.toLowerCase();

  return heroes.filter(heroes => heroes.superhero.toLowerCase().includes(nam))
  
     
}
