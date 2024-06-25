
const character =['Goku','Vegeta','Trunks','Goten']

const[,,g] = character;

console.log({g})

const returnArray =()=>{
    //si este valor no cambiara se puede tratar como un as const
    return [123, 'ABC'] as const;  
}

const[numbers,letters] = returnArray();

console.log(numbers * 3,letters.toLowerCase());