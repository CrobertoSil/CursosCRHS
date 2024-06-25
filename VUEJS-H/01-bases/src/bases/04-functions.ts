// function greetPerson (name:string){

//     return `Hola, ${name}`;
// }

// const greetPerson = (name:string) =>{
//     return `Hola, ${name}`;
//}

const greetPerson = (name: string) => `Hola, ${name}`;

// const getUser = () => {
//     return{
//         uid:'ABC-123',
//         username:'Carlos123'
//     }
// }

const getUser = (uid: string) => ({
  uid: uid,
  username: "Carlos123",
});

console.log(getUser("ABV-789"));

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
];

const hero = heroes.find( (h) => h.id===1)

console.log(hero?.name)
