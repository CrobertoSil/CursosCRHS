//fetch lectura de apis

fetch('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then(data=>{
  //console.log(data.results)  
  data.results.forEach(element => {
    //console.log(element.name)
  });
})
.catch(error => console.log(error))

//async & await
const obtenerPokemones = async()=>{
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemones();

//map es para recorrer un arrar en lugar de un forech
// const obtenerPokemones2 = async()=>{
//     try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//         const data = await res.json()
//         const arrayNombres = data.results.map(poke => poke.name)
//         console.log(arrayNombres)
//     } catch (error) {
//         console.log(error)
//     }
// }

// obtenerPokemones2();


//filter 
const obtenerPokemones2 = async()=>{
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur')
        console.log(arrayNombres)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemones2();