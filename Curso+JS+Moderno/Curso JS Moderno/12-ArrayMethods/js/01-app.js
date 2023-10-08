const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo de indices 
meses.forEach((mes)=>{
    if (mes ==='Enero') {
        console.log('Enero si existe')    
    }  
});

//array methods
const resultado =  meses.includes('Enero');
//console.log(resultado);


// en un arreglo de objetos se utiliza .some
const existe = carrito.some((producto)=>{
    return producto.nombre ==='Celular'
})
console.log(existe);

// simplificado 
const existe2 = carrito.some( producto2 => producto2.nombre === 'Carros');
console.log (existe2);

//en un arreglo tradicional con indices con . some

const existe3 = meses.some(mes=> mes==='Febrero');
console.log(existe3);