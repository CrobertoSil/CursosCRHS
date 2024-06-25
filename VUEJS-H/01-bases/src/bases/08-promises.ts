// console.log ('inicio');

import { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         //resolve('Pago');
//         reject ('No cumplio');
//     }, 1000);

// })
// .then((message) => console.log(message))
// .catch(errorMessage => console.log(errorMessage))

// console.log('Fin');

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      //   if (hero) {
      //     resolve(hero);
      //   } else {
      //     reject(`Heroe no encontrado #${id}`);
      //   }
      hero ? resolve(hero) : reject(`Heroe no encontrado #${id}`);
    }, 1500);
  });
};

getHeroByIdAsync(100)
  .then((hero) => console.log("El nombre es", hero.name))
  .catch((message) => alert(message));
