import heroes, { type Owner} from "../data/heroes";

console.log(heroes);


export const getHeroById = (id:number)=>{
    return heroes.find(hero=> hero.id === id);
    
}

console.log(getHeroById(2));

export const getHeroesByOwner = (owner:Owner)=>{
    return heroes.filter(hero => hero.owner === owner)
}

console.log(getHeroesByOwner('Marvel'));