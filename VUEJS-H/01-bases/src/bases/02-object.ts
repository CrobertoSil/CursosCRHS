export const person = {
    lastName: 'Stark',
    age: 45,
    address:{
        city: 'New Yotk',
        zip: 51323,
        lat: 14.2354,
        lng: 45.132
    }
} //as const;

//const person2 ={...person};

const person2 = structuredClone(person);

person2.lastName = 'Carlos'

console.log({person})
console.log({person2})