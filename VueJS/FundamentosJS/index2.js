//template string 
const numero = (num, num2) => (`El numero es ${num + num2}`)

const resultado = numero(20,50)
console.log(resultado);


// objetos para asignar un valor es con :
const mascota = {
    nombre: 'gato',
    edad: 10,
    vivo: true,
    meses : ['enero','febrero']
}

mascota.id=1;

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.meses[1])


const{edad} = mascota;
console.log(edad)

//objetos
const wes = {
    first: 'Wes',
    last: 'Bos',
        links: {
            social: {
                twitter: 'https://twitter.com/wesbos',
                facebook: 'https://facebook.com/wesbos.developer',
            },
            web: {
                blog: 'https://wesbos.com'
            }
        }
  };

  const { twitter, facebook } = wes.links.social;
console.log(twitter, facebook); // logs the 2 variables

//practica objetos
const web={
    nombre : 'youtube',
    links:{
        enlace: 'www.youtube.com'        
    },
    redesSociales:{
        enlace:'youtube.com/enlace',
        nombre: 'videos'
    }
}

const{enlace} = web.redesSociales;
console.log(enlace)