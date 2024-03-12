const arrayNumero = [10,20];
//agregar un numero al array
arrayNumero.push(40);

console.log(arrayNumero)


const persona ={
    nombre: 'Carlos',
    edad: 20
}

persona.pais = 'Guatemala';
console.log(persona);


//funciones 
function sumar(){
    console.log(10)
}
sumar( );

function sumarTres(num){
    console.log(num)
}
sumarTres(1000);


//funciones de flecha
const sumarDos = () =>{
    console.log(100)
}
sumarDos();

const sumarCuatro = (num1, num2)=>{
    console.log(num1 + num2)
}

sumarCuatro(10,50)

//retornar algo en funciones
const sumarCinco = (num3, num4)=>{
    return (num3 + num4)
}

const resultado = sumarCinco(25,50);
console.log(resultado);

//simplificada
const sumarSeis = (num3, num4) => (num3 + num4)

const resultado2 = sumarSeis(25,60);
console.log(resultado2);

const sumaSiete = (num)=>{
    console.log(num+3)
}

sumaSiete(9)

